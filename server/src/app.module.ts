import { Module } from '@nestjs/common';
import {UserController} from "./user/user.controller";
import {UserModule} from "./user/user.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [UserModule,
  TypeOrmModule.forRoot({
    type: 'postgres',       // DBの種類
    port: 5432,             // 使用ポート
    database: 'Kakabot',    // データベース名
    host: 'localhost',      // DBホスト名
    username: 'root',       // DBユーザ名
    password: 'root',       // DBパスワード
    synchronize: true,      // モデル同期(trueで同期)
    entities: [__dirname + '/**/*.entity.{js,ts}']
  })],
  controllers: [UserController]
})
export class AppModule {}
