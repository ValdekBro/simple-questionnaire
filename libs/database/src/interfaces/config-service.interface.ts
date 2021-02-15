export interface IConfigService {
    get(key: string): any
    getOrDef(key: string, def: any): any
}
