import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateBreedInput } from './dto/create-breed.input'
import { UpdateBreedInput } from './dto/update-breed.input'
import { handlePrismaError, PrismaService } from '@coulbyl/prisma'

@Injectable()
export class BreedService {
  private relations = { category: true, pets: true }

  constructor(private prismaService: PrismaService) {}

  async create(createBreedInput: CreateBreedInput) {
    return this.handleErrors(() => {
      return this.prismaService.breed.create({
        data: createBreedInput,
        include: this.relations,
      })
    })
  }

  findAll() {
    return this.prismaService.breed.findMany({ include: this.relations })
  }

  async findOne(id: string) {
    const breed = await this.prismaService.breed.findFirst({
      where: { id },
      include: this.relations,
    })
    if (!breed) throw new NotFoundException('Breed not found')
    return breed
  }

  update({ id, ...updateBreedInput }: UpdateBreedInput) {
    return this.handleErrors(() => {
      return this.prismaService.breed.update({
        where: { id },
        data: updateBreedInput,
        include: this.relations,
      })
    })
  }

  async remove(id: string) {
    return this.handleErrors(() =>
      this.prismaService.breed.delete({ where: { id } }),
    )
  }

  private async handleErrors<T>(fn: () => Promise<T>) {
    try {
      return await fn()
    } catch (error) {
      handlePrismaError(error, {
        NOT_FOUND: 'Breed not found',
        INTEGRITY: 'Breed already exist',
        NESTED_FOREIGN_KEY: 'Category not found',
      })
    }
  }
}
