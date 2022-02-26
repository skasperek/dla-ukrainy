import { DocumentBuilder } from "@nestjs/swagger";

export default new DocumentBuilder()
    .setTitle("WEB API")
    .setVersion("0.1")
    .build()