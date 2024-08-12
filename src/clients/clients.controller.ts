import { Controller, Post, Body, Get, Param, Delete, ParseIntPipe, Patch } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client-dto';
import { ClientsService } from './clients.service';
import { Client } from './clients.entity';
import { UpdateClientDto } from './dto/update-client-dto';


@Controller('clients')
export class ClientsController {
    constructor(private clientsService: ClientsService) { }

    @Get()
    getClients() {
        return this.clientsService.getClients();
    }

    @Get(':id')
    getClient(@Param('id') id: number) {
        return this.clientsService.getClient(id);
    }

    @Post()
    createClient(@Body() newClient: CreateClientDto) {
        return this.clientsService.createClient(newClient);
    }

    @Delete(':id')
    deleteClient(@Param('id', ParseIntPipe) id: number)  {
        return this.clientsService.deleteClient(id);
    }  

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateClientDto){
        return this.clientsService.updateClient(id, user);
    }
}
