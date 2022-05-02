import { join, resolve } from "path";
import { make } from "./utils/make";
import { Role } from "./orm/entities/RoleEntity";
import { User } from "./orm/entities/UserEntity";

export class Config {
  rootPath = resolve(".");
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
