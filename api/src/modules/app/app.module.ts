import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from '../../providers/app/app.service';
import {Config} from '../../modules';
import { AppController } from 'src/controllers';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(Config),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get("mognooseUrl"),
      }),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}