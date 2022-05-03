import { BackReference, entity, MinLength, Unique } from "@deepkit/type";
import { Common } from "./CommonEntity";
import { Role } from "./RoleEntity";
import { UserJoinRole } from "./UserJoinRoleEntity";

@entity.name("user")
export class User extends Common {
  username!: string & Unique & MinLength<4>;
  password!: string & MinLength<4>;

  name!: string & Unique & MinLength<1>;

  roles?: Role[] & BackReference<{ via: typeof UserJoinRole }>;

  constructor() {
    super();
  }
}
