import { Module } from '@nestjs/common';
import { RentalDetailsController } from './rental-details.controller';
import { RentalDetailsService } from './rental-details.service';

@Module({
  controllers: [RentalDetailsController],
  providers: [RentalDetailsService]
})
export class RentalDetailsModule {}
