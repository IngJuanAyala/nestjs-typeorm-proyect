import { Module } from '@nestjs/common';
import { CdController } from './cd.controller';
import { CdService } from './cd.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Cd } from './cd.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cd])],
  controllers: [CdController],
  providers: [CdService]
})
export class CdModule {}
