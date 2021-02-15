import { NotFoundException } from "@nestjs/common"

export const invalidUserRoleException = new NotFoundException("Invalid User Role")
