import { CreateUserInput } from './create-user.input'
import { InputType, Field, PartialType } from '@nestjs/graphql'
import { IsBoolean, IsNotEmpty } from 'class-validator'

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  @IsNotEmpty()
  id: string
}

@InputType()
export class UpdateUserAdminInput {
  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  isAdmin?: boolean

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  isActive?: boolean
}
