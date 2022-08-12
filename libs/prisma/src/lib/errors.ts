/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'

interface ErrorMessage {
  INTEGRITY?: string
}

export function handlePrismaError(error: any, message: ErrorMessage) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    throwIntegrityException(error.code, message.INTEGRITY)
  }
  throw new InternalServerErrorException(error)
}

function throwIntegrityException(code: string, message: string) {
  if (code === 'P2002') {
    throw new BadRequestException(message)
  }
}
