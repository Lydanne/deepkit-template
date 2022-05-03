import { User } from "../../../orm/entities/UserEntity";

export interface UpdateUserDto
  extends Omit<User, "id" | "createdAt" | "updatedAt" | "roles"> {}
