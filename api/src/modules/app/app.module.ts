import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from '../../providers/app/app.service';
import {Config} from '../../modules';
import { AppController } from 'src/controllers';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from 'src/schemas';
import AppSocket from 'src/websockets/AppSocket';
import { SocketService } from 'src/websockets/providers/socket.service';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from 'src/strategies/app/google.strategy';
import { FacebookStrategy } from 'src/strategies/app/facebook.strategy';

@Module({
  imports: [
    PassportModule,
    ConfigModule.forRoot(Config),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: "mongodb://users:J20sdk2d3sLpqo@51.38.214.101:27017/users",
      }),
    }),
    MongooseModule.forFeature([
      {name: "Event", schema: EventSchema}
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, AppSocket, SocketService, FacebookStrategy, GoogleStrategy],
})

export class AppModule {}