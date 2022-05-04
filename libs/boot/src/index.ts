import * as bootFunction from "./boots";
import { ConsoleTransport, Logger } from "@deepkit/logger";

const logger = new Logger([new ConsoleTransport()]);
logger.scoped("@boot");

function loadBoot() {
  for (const key of Object.keys(bootFunction)) {
    const handler = (bootFunction as any)[key];
    logger.debug(`>> load <green>'${key}'</green> handler!`);
    handler();
  }
}

loadBoot();
