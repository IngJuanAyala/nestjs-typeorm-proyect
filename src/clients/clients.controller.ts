import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client-dto';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
    constructor(private clientsService: ClientsService) { }

    @Get()
    getClients() {
        return this.clientsService.getClients();
    }

    @Post()
    createClient(@Body() newClient: CreateClientDto) {
        return this.clientsService.createClient(newClient);
    }
}
