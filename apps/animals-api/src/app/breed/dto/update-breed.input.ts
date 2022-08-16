import { CreateBreedInput } from './create-breed.input'
import { InputType, Field, PartialType } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class UpdateBreedInput extends PartialType(CreateBreedInput) {
  @Field(() => String)
  @IsNotEmpty()
  id: string
}
