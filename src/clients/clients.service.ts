import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './clients.entity';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client-dto';


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
}
