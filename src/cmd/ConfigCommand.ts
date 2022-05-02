import { Logger } from "@deepkit/logger";
import { cli, Command } from "@deepkit/app";
import { Config } from "../Config";

@cli.controller("config")
export class ConfigCommand implements Command {
  constructor(protected logger: Logger, private config: Config) {}

  async execute() {
    this.logger.log(this.config);

    process.exit(0);
  }
}
