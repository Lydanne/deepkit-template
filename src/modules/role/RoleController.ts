import { http } from "@deepkit/http";
import { RoleService } from "./RoleService";

@http.controller("role")
export class RoleController {
  constructor(protected roleService: RoleService) {}

  @http.GET(":id")
  get(id: string) {
    return this.roleService.findOne(+id);
  }

  @http.GET()
  gets() {
    return this.roleService.findAll();
  }
}
