import { createModule } from "@deepkit/app";
import { RbacService } from "./RbacService";
import { RbacCommand } from "./RbacCommand";

export class RbacModule extends createModule({}) {
  controllers = [RbacCommand];
  providers = [RbacService];
  exports = [RbacService];
}
