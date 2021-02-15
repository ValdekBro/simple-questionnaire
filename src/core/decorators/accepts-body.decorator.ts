/* eslint-disable @typescript-eslint/ban-types */
import { Type } from "@nestjs/common"
import { ApiBody } from "@nestjs/swagger"

export const DocAcceptsBody = (
    type?: string | Function | Type<any> | [Function],
    description?: string
): MethodDecorator => ApiBody({ type, description })
