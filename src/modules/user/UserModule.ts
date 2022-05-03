import { createModule } from "@deepkit/app";
import { UserController } from "./UserController";
import { UserService } from "./UserService";

export class UserModule extends createModule({}) {
  controllers = [UserController];
  providers = [UserService];
  exports = [UserService];
}
