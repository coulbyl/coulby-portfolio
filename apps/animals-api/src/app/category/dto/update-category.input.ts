import { CreateCategoryInput } from './create-category.input'
import { InputType, Field, PartialType } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(() => String)
  @IsNotEmpty()
  id: string
}
