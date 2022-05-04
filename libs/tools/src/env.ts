import * as dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import { join } from "path";
import { readFileSync } from "fs";
import { tryCatch } from "./error";

export type EnvId =
  | "dev"
  | "prod"
  | "test"
  | "local"
  | "develop"
  | "production"
  | "development";

const envIdMap = {
  prod: "prod",
  production: "prod",
  develop: "dev",
  development: "dev",
  dev: "dev",
  test: "test",
  local: "local",
};

const commonEnv = readEnvFile(".env");

const envStore = loadEnvFiles([".env." + activeEnv()]); // 后面的优先级高

/**
 * 读取环境变量
 * @param name env name
 * @param defaultValue 默认值
 * @param prefix 前缀，尝试访问的前缀
 * @returns 读取的环境变量
 */
export function env<T>(
  name: string,
  defaultValue: T | (() => T),
  prefix: string = ""
): T {
  name = prefix + name;
  defaultValue =
    defaultValue instanceof Function ? defaultValue() : defaultValue;
  return (tryCatch(() => JSON.parse(envStore[name] ?? process.env[name])) ??
    defaultValue) as T;
}

export function loadEnvFiles(paths: string[] = []) {
  const ret = commonEnv;
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];

    const parsed = readEnvFile(path);

    Object.assign(ret, parsed);
  }

  return ret;
}

export function readEnvFile(envFile = ".env") {
  const envPath = join(process.cwd(), envFile);
  const text = tryCatch(() => readFileSync(envPath, { encoding: "utf-8" }));
  if (text === undefined) {
    return {};
  }
  const { parsed } = dotenvExpand.expand({
    parsed: dotenv.parse(text),
    ignoreProcessEnv: true,
  } as any);

  for (const key in parsed) {
    if (Object.prototype.hasOwnProperty.call(parsed, key)) {
      const value = parsed[key];
      process.env[key] = String(value);
    }
  }

  return parsed ?? {};
}

/**
 * 创建环境变量读取器
 * @param scope 域 APP的名称
 * @returns readEnvVar 带有域的方法
 */
export function createScope(scope: string) {
  return <T>(name: string, defaultValue: T) =>
    env(name, () => env(name, defaultValue), scope + "_");
}

/**
 * 获取当前环境
 * @returns current environment identification (prod、dev、test、local)
 */
export function activeEnv() {
  return envIdMap[(process.env.NODE_ENV ?? "local") as EnvId] ?? "local";
}

export function isEnv(envId: EnvId) {
  return activeEnv() === envIdMap[envId];
}
