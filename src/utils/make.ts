import { ClassType } from "@deepkit/core";

export function fill<T>(instance: T, props: Partial<T>): T {
  for (const key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key)) {
      const prop = props[key];
      if (prop !== undefined && prop !== null) {
        instance[key] = prop as any;
      }
    }
  }
  return instance;
}

export function make<T>(Entity: ClassType<T>, props: Partial<T>) {
  return fill(new Entity(), props);
}
