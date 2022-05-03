import { http, HttpBody } from "@deepkit/http";
import { CreateUserDto } from "./dto/CreateUserDto";
import { UserService } from "./UserService";
import { UpdateUserDto } from "./dto/UpdateUserDto";
import { Resource } from "@rbac";
import { RbacService } from "@rbac";

@Resource.name("user")
@http.controller("user")
export class UserController {
  constructor(
    protected userService: UserService,
    private rbacService: RbacService
  ) {}

  @Resource.action("create")
  @http.POST()
  create(dto: HttpBody<CreateUserDto>) {
    return this.userService.create(dto);
  }

  @Resource.action("get")
  @http.GET(":id").data("role", "user")
  get(id: string) {
    console.log(this.rbacService.getAllActions());

    return this.userService.findOne(+id);
  }

  @http.GET()
  async gets() {
    const res = await this.userService.findAll();
    return res;
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
