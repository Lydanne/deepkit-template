import { User } from "@app/orm/entities/UserEntity";
import { eventDispatcher } from "@deepkit/event";
import { httpWorkflow, JSONResponse } from "@deepkit/http";
import { serialize } from "@deepkit/type";
import { ResourceClass, ResourceProp } from "../../libs/rbac/src/Resource";

export class ResponseEvent {
  @eventDispatcher.listen(httpWorkflow.onControllerError)
  onControllerError(event: typeof httpWorkflow.onControllerError.event) {
    if (event.sent) return;
    if (event.hasNext()) return;

    console.error(event.error);

    event.send(
      new JSONResponse({
        code: 500,
        message: "Internal Server Error",
        error: String(event.error),
      })
    );

    event.stopPropagation();
  }

  @eventDispatcher.listen(httpWorkflow.onResponse)
  onResponse(event: typeof httpWorkflow.onResponse.event) {
    if (event.result instanceof JSONResponse) return;
    // event.result = serialize<typeof event.result>(event.result); // TODO: Just let go of this for now
  }

  @eventDispatcher.listen(httpWorkflow.onController)
  onController(event: typeof httpWorkflow.onController.event) {
    const resource =
      ResourceClass._fetch(event.route.action.controller)?.name || "";
    const action =
      ResourceProp._fetch(
        event.route.action.controller,
        event.route.action.methodName
      )?.action || "";
    const resourceAction = resource + action;

    console.log("access", resourceAction);

    if (resourceAction) {
      // Authority judgment
      // event.accessDenied();
    }
  }

  /**
   * We change the default accessDenied implementation.
   */
  @eventDispatcher.listen(httpWorkflow.onAccessDenied)
  onAccessDenied(event: typeof httpWorkflow.onAccessDenied.event): void {
    if (event.sent) return;
    if (event.hasNext()) return;

    event.send(
      new JSONResponse(
        {
          code: 403,
          message: "Access Denied",
        },
        403
      )
    );
  }
}
