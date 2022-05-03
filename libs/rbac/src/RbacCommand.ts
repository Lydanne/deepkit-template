import { cli, Command } from "@deepkit/app";
import { RbacService } from "./RbacService";

@cli.controller("actions")
export class RbacCommand implements Command {
  constructor(private rbacService: RbacService) {}

  async execute() {
    console.log(this.rbacService.getAllActions());
    process.exit(0);
  }
}
