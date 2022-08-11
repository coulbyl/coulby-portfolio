import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { PrismaService } from '@coulbyl/prisma'
import { AuthService, AuthModule } from '@coulbyl/auth'

@Module({
  imports: [AuthModule],
  providers: [UserResolver, UserService, PrismaService, AuthService],
})
export class UserModule {}
