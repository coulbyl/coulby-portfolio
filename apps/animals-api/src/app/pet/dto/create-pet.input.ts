import { InputType, Int, Field, Float } from '@nestjs/graphql'
import { Type } from 'class-transformer'
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  ArrayMinSize,
} from 'class-validator'

@InputType()
export class CreatePetInput {
  @Field(() => String)
  @IsNotEmpty()
  name: string

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsPositive()
  age?: number

  @Field(() => String)
  @IsNotEmpty()
  description: string

  @Field(() => [String])
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => String)
  photos: string[]

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsNotEmpty()
  categoryId?: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsNotEmpty()
  breedId?: string
}
