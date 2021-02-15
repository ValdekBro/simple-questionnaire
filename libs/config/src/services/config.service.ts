import * as dotenv from "dotenv"
import * as fs from "fs"
import { Injectable, Logger } from "@nestjs/common"

@Injectable()
export class ConfigService {
    private logger: Logger = new Logger("Config service")
    private readonly envConfig: Record<string, string>

    constructor(filePath: string) {
        this.envConfig = dotenv.parse(fs.readFileSync(filePath))
        this.logger.log(process.env.NODE_ENV)
    }

    get(key: string): string {
        return this.envConfig[key]
    }

    getOrDef(key: string, def: any): any {
        if (this.get(key)) {
            return this.get(key)
        } else {
            return def
        }
    }

    getOrError(key: string) {
        const res = this.get(key)
        if (!res) throw new Error("Not found reqired env key = " + key)
        return res
    }
}
