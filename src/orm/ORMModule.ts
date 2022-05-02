import { createModule } from "@deepkit/app";
import { ORMDatabase } from "./ORMDatabase";
import { Config } from "../Config";

export class ORMModule extends createModule({
  config: Config,
  providers: [ORMDatabase],
  exports: [ORMDatabase],
}) {}
