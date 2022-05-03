import { actions } from "./Resource";

export class RbacService {
  match(actions: string[], targetAction: string): boolean {
    return actions.includes(targetAction);
  }

  getAllActions() {
    return actions;
  }
}
