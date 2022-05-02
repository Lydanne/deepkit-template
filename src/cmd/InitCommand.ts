import { Logger } from "@deepkit/logger";
import { cli, Command } from "@deepkit/app";
import { Config } from "../Config";
import { ORMDatabase } from "../orm/ORMDatabase";
import { make } from "../utils/make";
import { Role } from "../orm/entities/RoleEntity";

@cli.controller("init")
export class InitCommand implements Command {
  constructor(
    protected logger: Logger,
    private config: Config,
    private orm: ORMDatabase
  ) {}

  async execute() {
    await this.orm.migrate();
    let adminRole = null;
    for (const iterator of this.config.initRoles) {
      await this.orm.persist(iterator);
      if (iterator.name === "admin") {
        adminRole = iterator;
      }
    }
    if (adminRole) {
      for (const iterator of this.config.initAdminUsers) {
        iterator.roles.push(adminRole);
        await this.orm.persist(iterator);
      }
    }
    process.exit(0);
  }
}
