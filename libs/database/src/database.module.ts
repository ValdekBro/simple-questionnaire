import { DynamicModule, Global, Module } from "@nestjs/common"
import { ConnectionOptions, createConnection } from "typeorm"
import { IConfigService, IDatabaseModuleParams } from "./interfaces"

export const getDatabaseParams = (configService: IConfigService): Partial<ConnectionOptions> => ({
    type: configService.getOrDef("DATABASE_TYPE", "postgres"),
    host: configService.getOrDef("DATABASE_HOST", "localhost"),
    port: configService.getOrDef("DATABASE_PORT", 3306),
    username: configService.getOrDef("DATABASE_USER", "test"),
    password: configService.getOrDef("DATABASE_PASS", "test"),
    database: configService.getOrDef("DATABASE_DB", "test"),
    synchronize: true,
})

@Global()
@Module({})
export class DatabaseModule {
    static forRoot({ imports = [], ...params }: IDatabaseModuleParams): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [...imports],
            providers: [
                {
                    provide: "DATABASE_CONNECTION",
                    useFactory: async (configService: IConfigService) => {
                        return await createConnection({
                            ...getDatabaseParams(configService),
                            entities: params.entities,
                        } as ConnectionOptions)
                    },
                    inject: params.inject,
                },
            ],
            exports: ["DATABASE_CONNECTION"],
        }
    }
}
