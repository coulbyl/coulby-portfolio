/* eslint-disable @typescript-eslint/no-explicit-any */
import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(user: any, password: string) {
    if (user && bcrypt.compareSync(password, user.password)) return user
    throw new BadRequestException('Invalid credentials')
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      id: user.id,
      isAdmin: user?.isAdmin,
      isActive: user?.isActive,
      sub: user.id,
    }
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: this.configService.get('JWT_SECRET_KEY'),
      }),
    }
  }
}
