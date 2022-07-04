import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { BeyondManagerResolver } from './beyond-manager.resolver';
import { BeyondManagerService } from './beyond-manager.service';

@Module({
    providers:[BeyondManagerResolver,BeyondManagerService/*,PrismaService*/]
})
export class BeyondManagerModule {}
