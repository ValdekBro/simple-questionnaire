import { JwtCoreModule } from "@app/jwt"
import { ConfigModule, ConfigService } from "@app/config"
import { Module } from "@nestjs/common"
import {
    configModuleOptions,
    databaseProvider,
} from "src/config"
import { REST_MODULES } from "./rest"
import { DOMAINS_MODULES } from "./domain"

@Module({
    imports: [
        ConfigModule.forRoot(configModuleOptions),

        JwtCoreModule.forRoot({
            inject: [ConfigService],
        }),

        databaseProvider(),

        ...DOMAINS_MODULES,
        ...REST_MODULES,
    ],
})
export class AppModule {}
