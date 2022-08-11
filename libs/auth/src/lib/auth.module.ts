import { Module } from '@nestjs/common'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { AuthService } from './service/auth.service'
import { ConfigService } from '@nestjs/config'
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET_KEY'),
        signOptions: { expiresIn: '7d' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, JwtStrategy, JwtService],
  exports: [AuthService, JwtService],
})
export class AuthModule {}
