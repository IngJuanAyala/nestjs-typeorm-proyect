import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { RentalModule } from './rental/rental.module';
import { RentalDetailsModule } from './rental-details/rental-details.module';
import { CdModule } from './cd/cd.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATASOURCE_HOST,
      port: parseInt(process.env.DATASOURCE_PORT),
      username: process.env.DATASOURCE_USERNAME,
      password: process.env.DATASOURCE_PASSWORD,
      database:  process.env.DATASOURCE_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true
    }),
    ClientsModule,
    RentalModule,
    RentalDetailsModule,
    CdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
