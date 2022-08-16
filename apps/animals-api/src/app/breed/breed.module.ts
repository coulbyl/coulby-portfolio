import { Module } from '@nestjs/common'
import { BreedService } from './breed.service'
import { BreedResolver } from './breed.resolver'
import { PrismaService } from '@coulbyl/prisma'

@Module({
  providers: [BreedResolver, BreedService, PrismaService],
})
export class BreedModule {}
