/* eslint-disable @typescript-eslint/ban-types */
import { CanActivate, UseGuards } from "@nestjs/common"

export const Guards = UseGuards

export const Guard = (guard: Function | CanActivate): MethodDecorator & ClassDecorator => Guards(guard)
