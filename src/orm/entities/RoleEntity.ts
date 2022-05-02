import { entity, Index, MinLength, Unique } from "@deepkit/type";
import { Common } from "./CommonEntity";

@entity.name("role")
export class Role extends Common {
  name!: string & Unique & MinLength<1>;

  note: string = ""; // 备注

  actions: string[] = []; // 权限

  constructor() {
    super();
  }
}
