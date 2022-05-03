import { http, HttpBody } from "@deepkit/http";
import { CreateUserDto } from "./dto/CreateUserDto";
import { UserService } from "./UserService";
import { UpdateUserDto } from "./dto/UpdateUserDto";

// @Resource("user")
@http.controller("user")
export class UserController {
  constructor(protected userService: UserService) {}

  // @Action("create")
  @http.POST()
  create(dto: HttpBody<CreateUserDto>) {
    return this.userService.create(dto);
  }

  @http.GET(":id")
  get(id: string) {
    return this.userService.findOne(+id);
  }

  @http.GET()
  gets() {
    return this.userService.findAll();
  }

  @http.PATCH(":id")
  update(id: string, dto: HttpBody<UpdateUserDto>) {
    return this.userService.update(+id, dto);
  }

  @http.DELETE(":id")
  remove(id: string) {
    return this.userService.remove(+id);
  }
}
