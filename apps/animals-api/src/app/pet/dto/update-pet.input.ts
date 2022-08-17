import { CreatePetInput } from './create-pet.input'
import { InputType, Field, PartialType } from '@nestjs/graphql'
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'

@InputType()
export class UpdatePetInput extends PartialType(CreatePetInput) {
  @Field(() => String)
  @IsNotEmpty()
  id: string

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  @Type(() => Boolean)
  isAvailable?: boolean
}
