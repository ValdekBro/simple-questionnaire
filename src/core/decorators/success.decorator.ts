/* eslint-disable @typescript-eslint/ban-types */
import { Type } from "@nestjs/common"
import { ApiResponse } from "@nestjs/swagger"

export const DocResponse = (
    description?: string,
    type?: string | Function | Type<any> | [Function],
    status = 200
): MethodDecorator & ClassDecorator => ApiResponse({ status, description, type })

export const DocSuccess = (
    description = "Success",
    type?: string | Function | Type<any> | [Function],
    status = 200
): MethodDecorator & ClassDecorator => DocResponse(description, type, status)
