declare const module: any

import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.useGlobalPipes(new ValidationPipe({ transform: true }))
    // app.use(compression())
    app.enableCors()

    const swaggerOptions = new DocumentBuilder()
        .setTitle("Questionnaire")
        .setDescription("The Questionnaire API")
        .setVersion("1.0")
        .addTag("API")
        .build()

    const document = SwaggerModule.createDocument(app, swaggerOptions)
    SwaggerModule.setup("docs", app, document)

    await app.listen(3000)

    if (module.hot) {
        module.hot.accept()
        module.hot.dispose(() => app.close())
    }
}
bootstrap()
