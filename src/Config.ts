import { env, make } from "@tools";
import { join, resolve } from "path";
import { Role } from "./orm/entities/RoleEntity";
import { User } from "./orm/entities/UserEntity";

export class Config {
  rootPath = resolve(env("ROOT_PATH", "."));
  port = env("PORT", 3000);
  database = {
    path: join(this.rootPath, "runtime", "db.sqlite"),
  };

  initRoles = [
    make(Role, {
      name: "admin",
      actions: ["*"],
    }),
    make(Role, {
      name: "user",
    }),
  ];

  initAdminUsers = [
    make(User, {
      name: "admin",
      username: "admin",
      password: "admin",
    }),
  ];
}

export const config = () => new Config();
