import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rental } from './rental.entity';
import { Repository } from 'typeorm';
import { CreateRentalDto } from './dto/create-rental-dto';
import { UpdateRentalDto } from './dto/update-rental-dto';

@Injectable()
export class RentalService {
    constructor(@InjectRepository(Rental) private rentalRepository: Repository<Rental>){}
    
    createRental(rental: CreateRentalDto) {
        const newRental = this.rentalRepository.create(rental);
        this.rentalRepository.save(newRental);
    }

    async getRentals(): Promise<Rental[]>{
       return this.rentalRepository.find();
    }

    async getRental(id: number) {
        const rentalFound = await this.rentalRepository.findOne({
            where: {
                id
            }
        })

        if (!rentalFound) {
            throw new HttpException('Rental not found', HttpStatus.NOT_FOUND);
        }

        return rentalFound;
    }

    deleteRental(id: number){
        return this.rentalRepository.delete({ id });
    }

    updateRental(id: number, rental: UpdateRentalDto){
        return this.rentalRepository.update({ id }, rental);
    }
}
