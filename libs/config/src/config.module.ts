import { Global, Module } from "@nestjs/common"
import { IConfigOptions } from "./interfaces"
import { ConfigService } from "./services/config.service"

const configServiceProvider = envPath => ({
    provide: ConfigService,
    useValue: new ConfigService(envPath),
})

@Global()
@Module({})
export class ConfigModule {
    static forRoot(options: IConfigOptions) {
        return {
            module: ConfigModule,
            providers: [configServiceProvider(options.envPath)],
            exports: [ConfigService],
        }
    }
}
