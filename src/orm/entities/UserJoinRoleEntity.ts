import { entity, Reference } from "@deepkit/type";
import { User } from "@app/orm/entities/UserEntity";
import { Common } from "./CommonEntity";
import { Role } from "./RoleEntity";

@entity.name("user_join_role")
export class UserJoinRole extends Common {
  constructor(public user: User & Reference, public role: Role & Reference) {
    super();
  }
}
