import { Controller, Post, Body, Get, Param, Delete, ParseIntPipe, Patch } from '@nestjs/common';
import { CreateRentalDto } from './dto/create-rental-dto';
import { RentalService } from './rental.service';
import { UpdateRentalDto } from './dto/update-rental-dto';

@Controller('rentals')
export class RentalController {
    constructor(private rentalsService: RentalService) { }

    @Get()
    getRentals() {
        return this.rentalsService.getRentals();
    }

    @Get(':id')
    getRental(@Param('id', ParseIntPipe) id: number) {
        return this.rentalsService.getRental(id);
    }

    @Post()
    createRental(@Body() newRental: CreateRentalDto) {
        return this.rentalsService.createRental(newRental);
    }

    @Delete(':id')
    deleteRental(@Param('id', ParseIntPipe) id: number) {
        return this.rentalsService.deleteRental(id);
    }

    @Patch(':id')
    updateRental(@Param('id', ParseIntPipe) id: number, @Body() rental: UpdateRentalDto) {
        return this.rentalsService.updateRental(id, rental);
    }
}
