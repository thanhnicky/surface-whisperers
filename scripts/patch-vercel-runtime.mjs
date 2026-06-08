import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { resolve } from "path";

// Use absolute path to avoid CWD issues on Vercel build servers
const projectRoot = new URL("..", import.meta.url).pathname;
const outputDir = resolve(projectRoot, ".vercel/output");
const funcDir = resolve(outputDir, "functions/__server.func");
const vcConfigPath = resolve(funcDir, ".vc-config.json");
const configPath = resolve(outputDir, "config.json");

console.log(`[patch] CWD: ${process.cwd()}`);
console.log(`[patch] Script dir: ${projectRoot}`);
console.log(`[patch] Output dir: ${outputDir}`);
console.log(`[patch] funcDir exists: ${existsSync(funcDir)}`);
if (existsSync(resolve(outputDir, "functions"))) {
  console.log(`[patch] functions/: ${readdirSync(resolve(outputDir, "functions")).join(", ")}`);
}

if (existsSync(vcConfigPath)) {
  const vcConfig = JSON.parse(readFileSync(vcConfigPath, "utf8"));
  console.log(`[patch] Current runtime: ${vcConfig.runtime}`);
  vcConfig.runtime = "nodejs20.x";
  vcConfig.supportsResponseStreaming = false;
  writeFileSync(vcConfigPath, JSON.stringify(vcConfig, null, 2));
  console.log("[patch] Patched .vc-config.json: runtime=nodejs20.x");
} else {
  console.error("[patch] FATAL: No .vc-config.json found at:", vcConfigPath);
  process.exit(1);
}

// Simplify config.json routing to catch-all only (avoid Vercel route parsing issues)
if (existsSync(configPath)) {
  const config = JSON.parse(readFileSync(configPath, "utf8"));
  config.routes = [
    { src: "/assets/(.*)", headers: { "cache-control": "public, max-age=31536000, immutable" }, continue: true },
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/__server" },
  ];
  writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log("[patch] Patched config.json routes");
}
