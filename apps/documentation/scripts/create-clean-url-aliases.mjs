import { copyFile, mkdir, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const distDir = path.resolve(".vitepress", "dist");
let aliasesCreated = 0;

async function createAliases(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await createAliases(entryPath);
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith(".html") || entry.name === "index.html") {
      continue;
    }

    const aliasDir = path.join(dir, path.basename(entry.name, ".html"));
    const aliasPath = path.join(aliasDir, "index.html");

    if (existsSync(aliasPath)) {
      continue;
    }

    await mkdir(aliasDir, { recursive: true });
    await copyFile(entryPath, aliasPath);
    aliasesCreated += 1;
  }
}

try {
  await stat(distDir);
  await createAliases(distDir);
  console.log(`Created ${aliasesCreated} clean URL aliases.`);
} catch (error) {
  console.error(`Failed to create clean URL aliases in ${distDir}.`);
  console.error(error);
  process.exitCode = 1;
}
