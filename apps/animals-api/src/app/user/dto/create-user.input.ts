import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
  @Field(() => String)
  fullName: string

  @Field(() => String)
  username: string

  @Field(() => String)
  email: string

  @Field(() => String)
  phone: string

  @Field(() => String)
  city: string

  @Field(() => String)
  password: string
}
