import { CreateUserDto } from "./dto/CreateUserDto";
import { ORMDatabase } from "../../orm/ORMDatabase";
import { make } from "../../utils/make";
import { User } from "../../orm/entities/UserEntity";
import { Role } from "../../orm/entities/RoleEntity";
import { RoleService } from "../role/RoleService";
import { UpdateUserDto } from "./dto/UpdateUserDto";

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

  findOne(id: number) {
    return this.database.query(User).filter({ id }).findOne();
  }

  findAll() {
    return this.database.query(User).find();
  }

  update(id: number, dto: UpdateUserDto) {
    return this.database.query(User).filter({ id }).patchOne(dto);
  }

  remove(id: number) {
    return this.database.query(User).filter({ id }).deleteOne();
  }
}
