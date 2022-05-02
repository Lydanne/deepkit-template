import { PrimaryKey, AutoIncrement } from "@deepkit/type";

export class Common {
  id: number & PrimaryKey & AutoIncrement = 0;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
