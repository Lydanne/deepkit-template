import {
  createClassDecoratorContext,
  createPropertyDecoratorContext,
  mergeDecorator,
} from "@deepkit/type";
import { nextTick } from "process";

export const actions: string[] = [];

export const ResourceClass = createClassDecoratorContext(
  class ResourceDecorator {
    t = new (class {
      name: string = "";
    })();

    name(name: string) {
      this.t.name = name;
    }

    // onDecorator(classType: any, prop: any, desc: any) {
    //   console.log(typeof classType, prop, desc);
    // }
  }
);

export const ResourceProp = createPropertyDecoratorContext(
  class ResourceActionDecorator {
    t = new (class {
      action: string = "";
    })();

    action(action: string) {
      this.t.action += ":" + action;
    }

    onDecorator(classType: any, prop: any, desc: any) {
      nextTick(() => {
        actions.push(
          (ResourceClass._fetch(classType)?.name || "") + (this.t.action || "")
        );
      });
    }
  }
);

export const Resource = mergeDecorator(ResourceClass, ResourceProp);
