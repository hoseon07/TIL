import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({ 
  imports: [
    UserModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: "mysql",
        host: "localhost",
        port: config.get<number>("DB_PORT"),
        username: config.get<string>("DB_USER"),
        password: config.get<string>("DB_PASSWORD"),
        database: config.get<string>("DB_NAME"),
        entities: [],
        synchronize: true,
      })
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// @
// Spring : Annotation
// NestJs : Decorator

// module에 의존성 주입이 필수!!