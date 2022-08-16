import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateBreedInput } from './dto/create-breed.input'
import { UpdateBreedInput } from './dto/update-breed.input'
import { handlePrismaError, PrismaService } from '@coulbyl/prisma'

@Injectable()
export class BreedService {
  constructor(private prismaService: PrismaService) {}

  async create(createBreedInput: CreateBreedInput) {
    try {
      return await this.prismaService.breed.create({
        data: createBreedInput,
        include: { category: true, pets: true },
      })
    } catch (error) {
      handlePrismaError(error, { INTEGRITY: 'Breed already exists' })
    }
  }

  findAll() {
    return this.prismaService.breed.findMany({
      include: { category: true, pets: true },
    })
  }

  async findOne(id: string) {
    const breed = await this.prismaService.breed.findFirst({
      where: { id },
      include: { category: true, pets: true },
    })
    if (!breed) throw new NotFoundException('Breed not found')
    return breed
  }

  update({ id, ...updateBreedInput }: UpdateBreedInput) {
    return this.prismaService.breed.update({
      where: { id },
      data: updateBreedInput,
      include: { category: true, pets: true },
    })
  }

  async remove(id: string) {
    try {
      return await this.prismaService.breed.delete({ where: { id } })
    } catch (error) {
      handlePrismaError(error, { NOT_FOUND: 'Breed not found' })
    }
  }
}
