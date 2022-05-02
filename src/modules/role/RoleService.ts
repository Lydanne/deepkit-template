import { Role } from "../../orm/entities/RoleEntity";
import { ORMDatabase } from "../../orm/ORMDatabase";

export class RoleService {
  constructor(protected database: ORMDatabase) {}

  findOne(id: number) {
    return this.database.query(Role).filter({ id }).findOne();
  }

  findAll() {
    return this.database.query(Role).find();
  }

  findOneByName(roleName: string) {
    return this.database.query(Role).filter({ name: roleName }).findOne();
  }
}
