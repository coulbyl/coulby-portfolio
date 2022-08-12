/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { PrismaService, handlePrismaError } from '@coulbyl/prisma'
import { PrismaPromise } from '@prisma/client'

type FindOneKey = { [key in 'id' | 'email']?: string }

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    try {
      return await this.prismaService.user.create({
        data: createUserInput,
        include: { pets: true },
      })
    } catch (error) {
      handlePrismaError(error, { INTEGRITY: 'User already exists' })
    }
  }

  findAll() {
    return this.prismaService.user.findMany()
  }

  findOneBy(criteria: FindOneKey) {
    return this.prismaService.user.findUniqueOrThrow({
      where: criteria,
      include: { pets: true },
    })
  }

  update({ id, ...updateUserInput }: UpdateUserInput) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserInput,
    })
  }

  async remove(id: string) {
    const user = await this.findOneBy({ id })
    const transactions: PrismaPromise<any>[] = [this.deleteUser(id)]
    if (user.pets.length) transactions.push(this.deletePets(id))
    return this.prismaService.$transaction(transactions)
  }

  private deletePets(id: string) {
    return this.prismaService.pet.deleteMany({ where: { ownerId: id } })
  }

  private deleteUser(id: string) {
    return this.prismaService.user.delete({ where: { id } })
  }
}
