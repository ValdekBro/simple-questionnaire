import { _getOrDef } from "@app/helpers"
import { createParamDecorator, ExecutionContext } from "@nestjs/common"

export const ReqUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    return _getOrDef(request.user.id, null)
})
