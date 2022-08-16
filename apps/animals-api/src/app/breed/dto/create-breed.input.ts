import { InputType, Field } from '@nestjs/graphql'
import { IsNotEmpty, IsOptional } from 'class-validator'

@InputType()
export class CreateBreedInput {
  @Field(() => String)
  @IsNotEmpty()
  name: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsNotEmpty()
  categoryId?: string
}
