import { Injectable } from '@nestjs/common';
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

    getClient(id: number) {
        return this.clientRepository.findOne({
            where: {
                id
            }
        })
    }

    deleteClient(id: number){
        return this.clientRepository.delete({ id });
    }

    updateClient(id: number, user: UpdateClientDto){
        return this.clientRepository.update({id}, user)
    }
}
