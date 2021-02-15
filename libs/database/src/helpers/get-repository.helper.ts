import { Connection } from "typeorm"

export const getRepositoryHelper = (name, entity) => {
    return {
        provide: name,
        useFactory: (connection: Connection) => connection.getRepository(entity),
        inject: ["DATABASE_CONNECTION"],
    }
}
