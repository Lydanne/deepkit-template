import { eventDispatcher } from "@deepkit/event";
import { httpWorkflow, JSONResponse } from "@deepkit/http";

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

  // @eventDispatcher.listen(httpWorkflow.onResponse)
  // onResponse(event: typeof httpWorkflow.onResponse.event) {
  //   if (event.result instanceof JSONResponse) return;
  //   event.result = new JSONResponse({
  //     code: 200,
  //     message: "ok",
  //     data: event.result,
  //   });
  // }
}
