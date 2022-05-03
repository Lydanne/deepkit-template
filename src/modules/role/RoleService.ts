import { Role } from "@app/orm/entities/RoleEntity";
import { ORMDatabase } from "@app/orm/ORMDatabase";

export class RoleService {
  constructor(protected orm: ORMDatabase) {}

  findOne(id: number) {
    return this.orm.query(Role).filter({ id }).findOne();
  }

  findAll() {
    return this.orm.query(Role).find();
  }

  findOneByName(roleName: string) {
    return this.orm.query(Role).filter({ name: roleName }).findOne();
  }
}
