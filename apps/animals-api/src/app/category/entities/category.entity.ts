import { ObjectType, Field } from '@nestjs/graphql'
import { Breed } from '../../breed/entities/breed.entity'
import { Pet } from '../../pet/entities/pet.entity'

@ObjectType()
export class Category {
  @Field(() => String)
  id: string

  @Field(() => String)
  name: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: string

  @Field(() => String, { nullable: true })
  deletedAt: Date

  @Field(() => [Breed], { defaultValue: [] })
  breeds: Breed[]

  @Field(() => [Pet], { defaultValue: [] })
  pets: Pet[]
}
