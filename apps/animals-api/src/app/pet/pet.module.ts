import { Module } from '@nestjs/common'
import { PetService } from './pet.service'
import { PetResolver } from './pet.resolver'
import { PrismaService } from '@coulbyl/prisma'

@Module({
  providers: [PetResolver, PetService, PrismaService],
})
export class PetModule {}
