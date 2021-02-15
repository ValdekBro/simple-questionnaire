export const provideClass = (name: string, value: any) => ({
    provide: name,
    useClass: value,
})
