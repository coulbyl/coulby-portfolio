import { CreateUserInput } from './create-user.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  id: string

  @Field(() => Boolean, { nullable: true })
  isAdmin?: boolean

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean
}
