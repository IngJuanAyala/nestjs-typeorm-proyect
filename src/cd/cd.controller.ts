import { Controller, Post, Body, Get, Param, Delete, ParseIntPipe, Patch } from '@nestjs/common';
import { CreateCdDto } from './dto/create-cd-dto';
import { CdService } from './cd.service';  // Asegúrate de que este servicio esté correctamente implementado
import { UpdateCdDto } from './dto/update-cd-dto';

@Controller('cds')
export class CdController {
    constructor(private cdService: CdService) { }

    @Get()
    getCds() {
        return this.cdService.getCds();
    }

    @Get(':id')
    getCd(@Param('id', ParseIntPipe) id: number) {
        return this.cdService.getCd(id);
    }

    @Post()
    createCd(@Body() newCd: CreateCdDto) {
        return this.cdService.createCd(newCd);
    }

    @Delete(':id')
    deleteCd(@Param('id', ParseIntPipe) id: number) {
        return this.cdService.deleteCd(id);
    }

    @Patch(':id')
    updateCd(@Param('id', ParseIntPipe) id: number, @Body() cd: UpdateCdDto) {
        return this.cdService.updateCd(id, cd);
    }
}
