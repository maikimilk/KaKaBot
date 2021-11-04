import { Module } from '@nestjs/common';
import {UserController} from "./user/user.controller";
import {UserModule} from "./user/user.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import { TypeormConfigService } from './typeorm-config/typeorm-config.service';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [UserModule,
    ConfigModule.forRoot({
      envFilePath: [`.env/${process.env.NODE_ENV}.env`,'.env/default.env'],
      isGlobal: true,
    }),
    // TypeORMの設定を非同期取得に変更
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeormConfigService,
    }),],
  controllers: [UserController],
  providers: [TypeormConfigService]
})
export class AppModule {}
