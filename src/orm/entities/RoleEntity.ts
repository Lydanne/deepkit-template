import { BackReference, entity, Index, MinLength, Unique } from "@deepkit/type";
import { Common } from "./CommonEntity";
import { User } from "./UserEntity";
import { UserJoinRole } from "./UserJoinRoleEntity";

@entity.name("role")
export class Role extends Common {
  name!: string & Unique & MinLength<1>;

  note: string = ""; // 备注

  actions: string[] = []; // 权限

  users?: User[] & BackReference<{ via: typeof UserJoinRole }>;

  constructor() {
    super();
  }
}
