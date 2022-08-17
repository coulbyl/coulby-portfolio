import { Injectable, NotFoundException } from '@nestjs/common'
import { handlePrismaError, PrismaService } from '@coulbyl/prisma'
import { CreatePetInput } from './dto/create-pet.input'
import { UpdatePetInput } from './dto/update-pet.input'
import { User } from '../user/entities/user.entity'

@Injectable()
export class PetService {
  private relations = { category: true, breed: true, owner: true }

  constructor(private prismaService: PrismaService) {}

  async create(createPetInput: CreatePetInput, user: User) {
    const inputWithUser = { ...createPetInput, ownerId: user.id }
    return this.handleErrors(() => {
      return this.prismaService.pet.create({
        data: inputWithUser,
        include: this.relations,
      })
    })
  }

  findAll() {
    return this.prismaService.pet.findMany({ include: this.relations })
  }

  async findOne(id: string) {
    const pet = await this.prismaService.pet.findFirst({
      where: { id },
      include: this.relations,
    })
    if (!pet) throw new NotFoundException('Pet not found')
    return pet
  }

  async update({ id, ...updatePetInput }: UpdatePetInput) {
    return this.handleErrors(() => {
      return this.prismaService.pet.update({
        where: { id },
        data: updatePetInput,
        include: this.relations,
      })
    })
  }

  async remove(id: string) {
    return this.handleErrors(() =>
      this.prismaService.pet.delete({ where: { id } }),
    )
  }

  private async handleErrors<T>(fn: () => Promise<T>) {
    try {
      return await fn()
    } catch (error) {
      handlePrismaError(error, {
        NOT_FOUND: 'Pet not found',
        INTEGRITY: 'Pet already exist',
        NESTED_FOREIGN_KEY: 'Category or Breed not found',
      })
    }
  }
}
