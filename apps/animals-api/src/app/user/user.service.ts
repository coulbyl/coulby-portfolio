/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { PrismaService } from '@coulbyl/prisma'
import { Prisma, PrismaPromise } from '@prisma/client'

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
      if (error instanceof Prisma.PrismaClientKnownRequestError)
        this.throwIntegrityException(error.code)
      throw new InternalServerErrorException(error)
    }
  }

  private throwIntegrityException(code: string) {
    if (code === 'P2002') {
      throw new BadRequestException('Email or Username already in use')
    }
  }

  findAll() {
    return this.prismaService.user.findMany()
  }

  findOneById(id: string) {
    return this.prismaService.user.findUniqueOrThrow({
      where: { id },
      include: { pets: true },
    })
  }

  findOneByEmail(email: string) {
    return this.prismaService.user.findUniqueOrThrow({
      where: { email },
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
    const user = await this.findOneById(id)
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
