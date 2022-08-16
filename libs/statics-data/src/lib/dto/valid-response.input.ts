import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ValidResponse {
  @Field(() => String)
  message: string
}
