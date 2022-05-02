import { createModule } from "@deepkit/app";
import { Config } from "../../Config";
import { RoleController } from "./RoleController";
import { RoleService } from "./RoleService";

export class RoleModule extends createModule({
  config: Config,
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService],
}) {}
