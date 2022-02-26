import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '../../controllers/app.controller';
import { AppService } from '../../providers/app.service';
import {Config} from '../../modules';

@Module({
  imports: [
    ConfigModule.forRoot(Config),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
