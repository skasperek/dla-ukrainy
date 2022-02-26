import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModule, SwaggerOptions } from './modules';
import * as cookieParser from "cookie-parser";
import * as compression from 'compression';
import * as csurf from 'csurf';

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    const isProduction: boolean = configService.get("isProduction");
    const port: number = configService.get("port");

    app.use(cookieParser())

    const swaggerDocument = SwaggerModule.createDocument(app, SwaggerOptions);
    SwaggerModule.setup("index", app, swaggerDocument);

    if (isProduction){
        app.use(compression())
        app.use(csurf({ cookie: true }));
    }

    await app.listen(2083);
}

bootstrap();