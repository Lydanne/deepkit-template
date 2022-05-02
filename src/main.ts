import { App } from "@deepkit/app";
import { FrameworkModule } from "@deepkit/framework";
import { Config } from "./Config";
import { ORMModule } from "./orm/ORMModule";
import { UserModule } from "./modules/user/UserModule";
import { ResponseEvent } from "./events/ResponseEvent";
import { RoleModule } from "./modules/role/RoleModule";
import { CmdModule } from "./cmd/CmdModule";

new App({
  config: Config,
  imports: [
    new FrameworkModule({
      debug: true,
      migrateOnStartup: true,
      port: 3001,
    }),
    new CmdModule(),
    new UserModule(),
    new RoleModule(),
    new ORMModule(),
  ],
  listeners: [ResponseEvent],
}).run();
