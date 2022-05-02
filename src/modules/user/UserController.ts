import { http, HttpBody } from "@deepkit/http";
import { CreateUserDto } from "./dto/CreateUserDto";
import { UserService } from "./UserService";

@http.controller("user")
export class UserController {
  constructor(protected userService: UserService) {}

  @http.POST()
  create(dto: HttpBody<CreateUserDto>) {
    return this.userService.create(dto);
  }

  @http.GET(":id")
  get() {
    return "create ok";
  }

  @http.GET()
  gets() {
    return "create ok";
  }

  @http.POST()
  update() {
    return "create ok";
  }
}
