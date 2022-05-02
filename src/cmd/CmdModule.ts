import { createModule } from "@deepkit/app";
import { Config } from "../Config";
import { ConfigCommand } from "./ConfigCommand";
import { InitCommand } from "./InitCommand";

export class CmdModule extends createModule({
  config: Config,
  controllers: [ConfigCommand, InitCommand],
}) {}
