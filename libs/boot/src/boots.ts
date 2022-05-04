import { activeEnv, env } from "@tools";
export function envBoot() {
  console.log("Env: " + activeEnv());
  console.log("Node: " + process.version);
  console.log("PORT: " + env("PORT", "3000"));
}
