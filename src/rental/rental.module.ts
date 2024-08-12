import { Module } from '@nestjs/common';
import { RentalController } from './rental.controller';
import { RentalService } from './rental.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Rental } from './rental.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rental])],
  controllers: [RentalController],
  providers: [RentalService]
})
export class RentalModule {}
