import { ConfigService } from "@app/config"
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"

@Injectable()
export class SecretKeyGuard implements CanActivate {
    constructor(
        private readonly config: ConfigService,
        private readonly reflector: Reflector
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const secret = this.config.get("AUTH_SECRET")

        return secret === request.headers["auth-secret"]
    }
}
