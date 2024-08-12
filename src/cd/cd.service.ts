import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cd } from './cd.entity';
import { Repository } from 'typeorm';
import { CreateCdDto } from './dto/create-cd-dto';
import { UpdateCdDto } from './dto/update-cd-dto';

@Injectable()
export class CdService {
    constructor(@InjectRepository(Cd) private cdRepository: Repository<Cd>) {}

    async createCd(createCdDto: CreateCdDto): Promise<Cd> {
        const newCd = this.cdRepository.create(createCdDto);
        return await this.cdRepository.save(newCd);
    }

    async getCds(): Promise<Cd[]> {
        return await this.cdRepository.find();
    }

    async getCd(id: number): Promise<Cd> {
        const cdFound = await this.cdRepository.findOne({
            where: { id },
        });

        if (!cdFound) {
            throw new HttpException('CD not found', HttpStatus.NOT_FOUND);
        }

        return cdFound;
    }

    async deleteCd(id: number): Promise<void> {
        const result = await this.cdRepository.delete({ id });

        if (result.affected === 0) {
            throw new HttpException('CD not found', HttpStatus.NOT_FOUND);
        }
    }

    async updateCd(id: number, updateCdDto: UpdateCdDto): Promise<void> {
        const result = await this.cdRepository.update({ id }, updateCdDto);

        if (result.affected === 0) {
            throw new HttpException('CD not found', HttpStatus.NOT_FOUND);
        }
    }
}