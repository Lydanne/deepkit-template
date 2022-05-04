import { CreateUserDto } from "./dto/CreateUserDto";
import { ORMDatabase } from "../../orm/ORMDatabase";
import { User } from "../../orm/entities/UserEntity";
import { Role } from "../../orm/entities/RoleEntity";
import { RoleService } from "../role/RoleService";
import { UpdateUserDto } from "./dto/UpdateUserDto";
import { UserJoinRole } from "@app/orm/entities/UserJoinRoleEntity";
import { make } from "@tools";

export class UserService {
  constructor(protected orm: ORMDatabase, private roleService: RoleService) {}

  async create(dto: CreateUserDto, role?: Role) {
    const user = make(User, dto);
    if (!role) {
      role = await this.roleService.findOneByName("user");
    }
    const userRole = new UserJoinRole(user, role);
    await this.orm.persist(user, userRole);
    return user;
  }

  findOne(id: number) {
    return this.orm.query(User).innerJoinWith("roles").filter({ id }).findOne();
  }

  async findAll() {
    const res = await this.orm.query(User).joinWith("roles").find();
    return res;
  }

  update(id: number, dto: UpdateUserDto) {
    return this.orm.query(User).filter({ id }).patchOne(dto);
  }

  remove(id: number) {
    return this.orm.query(User).filter({ id }).deleteOne();
  }
}
