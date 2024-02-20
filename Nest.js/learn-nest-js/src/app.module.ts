import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './model/user.entity';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({ 
  imports: [
    UserModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "0402",
        database: "hoseon",
        entities: [UserEntity],
        synchronize: true,
    }),
    RedisModule.forRoot({
      readyLog: true,
      config: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIS_PASSWORD
      },
    }),
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// @
// Spring : Annotation
// NestJs : Decorator

// module에 의존성 주입이 필수!!

