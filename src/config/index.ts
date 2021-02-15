import { ConfigService } from "@app/config"
import { IConfigOptions } from "@app/config/public"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ENTITIES } from "./entities.config"

export const configModuleOptions: IConfigOptions = {
    envPath: process.env.ENV_PATH ? process.env.ENV_PATH : ".env",
}

export const databaseProvider = () => {
    return TypeOrmModule.forRootAsync({
        useFactory: async (configService: ConfigService) => ({
            type: configService.getOrDef("DB_TYPE", "postgres"),
            host: configService.getOrDef("DB_HOST", "localhost"),
            port: configService.getOrDef("DB_PORT", 3306),
            username: configService.getOrDef("DB_USER", "test"),
            password: configService.getOrDef("DB_PASS", "test"),
            database: configService.getOrDef("DB_NAME", "test"),
            synchronize: true,
            entities: ENTITIES,
            keepConnectionAlive: true,
        }),
        inject: [ConfigService],
    })
}
