import { Controller, Post, Body } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client-dto';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {

    constructor(private clientsService: ClientsService){}

    @Post()
    createClient(@Body() newClient: CreateClientDto){
        return this.clientsService.createClient(newClient);
    }
}
