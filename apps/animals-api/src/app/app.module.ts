import { Module } from '@nestjs/common'

import { PrismaModule } from '@coulbyl/prisma'
import { UserModule } from './user/user.module'
import { CategoryModule } from './category/category.module'
import { BreedModule } from './breed/breed.module'
import { PetModule } from './pet/pet.module'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard, AuthModule } from '@coulbyl/auth'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    CategoryModule,
    BreedModule,
    PetModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
