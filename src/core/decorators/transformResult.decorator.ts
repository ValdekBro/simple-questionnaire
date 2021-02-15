/* eslint-disable @typescript-eslint/ban-types */
import { plainToClass } from "class-transformer"
import { ClassType } from "class-transformer/ClassTransformer"

function isFunction(variableToCheck) {
    //If our variable is an instance of "Function"
    if (variableToCheck instanceof Function) {
        return true
    }
    return false
}

export enum TransformType {
    FUNCTION,
    CLASS
}

export type CustomTransformer = {
    type: TransformType
    method: ClassType<any> | Function
}

export function TransformResult(
    transformers: CustomTransformer[] | ClassType<any>,
    params?
) {
    return function(target, propertyKey, descriptor) {
        const transform = (transformer: CustomTransformer, target) => {
            return transformer.type === TransformType.FUNCTION
                ? (transformer.method as Function)(target)
                : plainToClass(
                      transformer.method as ClassType<any>,
                      target,
                      params
                )
        }

        const originalMethod = descriptor.value
        descriptor.value = function() {
            const args = []
            for (let _i = 0; _i < arguments.length; _i++) {
                // eslint-disable-next-line prefer-rest-params
                args[_i] = arguments[_i]
            }
            const result = originalMethod.apply(this, args)

            let generalResult = result

            if (!Array.isArray(transformers))
                transformers = [
                    { type: TransformType.CLASS, method: transformers }
                ]

            transformers.map(transformer => {
                const isPromise =
                    !!generalResult &&
                    (typeof generalResult === "object" ||
                        typeof result === "function") &&
                    typeof generalResult.then === "function"

                generalResult = isPromise
                    ? generalResult.then(function(data) {
                        return transform(transformer, data)
                    })
                    : transform(transformer, generalResult)
            })
            return generalResult
        }
    }
}
