import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UserService } from './user.service'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import {
  AuthService,
  LoginInput,
  Public,
  LoginResult,
  CurrentUser,
} from '@coulbyl/auth'
import { User } from './entities/user.entity'

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}

  @Public()
  @Mutation(() => LoginResult)
  async login(@Args('loginInput') loginInput: LoginInput) {
    let user = await this.userService.findOneByEmail(loginInput.email)
    user = await this.authService.validateUser(user, loginInput.password)
    return this.authService.login(user)
  }

  @Public()
  @Mutation(() => User)
  async signup(@Args('createUserInput') createUserInput: CreateUserInput) {
    const user = await this.userService.create(createUserInput)
    return this.authService.login(user)
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll()
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id') id: string) {
    return this.userService.findOneById(id)
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput)
  }

  @Mutation(() => User)
  removeUser(@Args('id') id: string) {
    return this.userService.remove(id)
  }
}