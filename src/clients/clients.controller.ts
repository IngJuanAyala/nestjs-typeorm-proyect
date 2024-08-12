import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client-dto';
import { ClientsService } from './clients.service';
import { Client } from './clients.entity';

@Controller('clients')
export class ClientsController {
    constructor(private clientsService: ClientsService) { }

    @Get()
    getClients() {
        return this.clientsService.getClients();
    }

    @Get(':id')
    getClient(@Param('id') id: number): Promise<Client> {
        return this.clientsService.getClient(id);
    }

    @Post()
    createClient(@Body() newClient: CreateClientDto) {
        return this.clientsService.createClient(newClient);
    }
}
