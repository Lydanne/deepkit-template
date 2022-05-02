import { User } from "../../../orm/entities/UserEntity";

export interface CreateUserDto
  extends Omit<User, "id" | "createdAt" | "updatedAt" | "roles"> {}
