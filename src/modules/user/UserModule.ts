import { createModule } from "@deepkit/app";
import { Config } from "../../Config";
import { RoleModule } from "../role/RoleModule";
import { UserController } from "./UserController";
import { UserService } from "./UserService";

export class UserModule extends createModule({
  config: Config,
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
}) {}
