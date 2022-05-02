import { CreateUserDto } from "./dto/CreateUserDto";
import { ORMDatabase } from "../../orm/ORMDatabase";
import { make } from "../../utils/make";
import { User } from "../../orm/entities/UserEntity";
import { Role } from "../../orm/entities/RoleEntity";
import { RoleService } from "../role/RoleService";

export class UserService {
  constructor(
    protected database: ORMDatabase,
    private roleService: RoleService
  ) {}

  async create(dto: CreateUserDto, role?: Role) {
    const user = make(User, dto);
    if (!role) {
      role = await this.roleService.findOneByName("user");

      user.roles.push(role);
    }
    await this.database.persist(user);
    return user;
  }

  getUser(id: string) {
    return {};
  }
}
