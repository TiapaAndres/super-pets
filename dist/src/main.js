"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        }
    }));
    app.setGlobalPrefix('api/v2');
    console.log('✅ process.env.PORT: ', process.env.PORT);
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map