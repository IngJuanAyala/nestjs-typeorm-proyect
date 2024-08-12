import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './clients.entity';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client-dto';
import { UpdateClientDto } from './dto/update-client-dto';


@Injectable()
export class ClientsService {
    constructor(@InjectRepository(Client) private clientRepository: Repository<Client>){}
    
    createClient(client: CreateClientDto) {
        const newClient = this.clientRepository.create(client);
        this.clientRepository.save(newClient);
    }

    async getClients(): Promise<Client[]>{
       return this.clientRepository.find();
    }

    async getClient(id: number) {
        const clientFound = await this.clientRepository.findOne({
            where: {
                id
            }
        })

        if (!clientFound) {
            return new HttpException('Client not found', HttpStatus.NOT_FOUND);
        }

        return clientFound;
    }

    deleteClient(id: number){
        return this.clientRepository.delete({ id });
    }

    updateClient(id: number, user: UpdateClientDto){
        return this.clientRepository.update({id}, user)
    }
}
