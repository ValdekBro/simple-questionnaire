import { ConfigModule } from "@app/config"
import { Module } from "@nestjs/common"
import { configModuleOptions, databaseProvider } from "src/config"
import { DOMAINS_MODULES } from "./domain"
import { REST_MODULES } from "./rest"

@Module({
    imports: [
        ConfigModule.forRoot(configModuleOptions),

        databaseProvider(),

        ...DOMAINS_MODULES,
        ...REST_MODULES
    ]
})
export class AppModule {}
