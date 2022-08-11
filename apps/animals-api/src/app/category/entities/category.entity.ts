import { ObjectType, Field } from '@nestjs/graphql'
import { Breed } from '../../breed/entities/breed.entity'
import { Pet } from '../../pet/entities/pet.entity'

@ObjectType()
export class Category {
  @Field(() => String)
  id: string

  @Field(() => String)
  name: string

  @Field(() => String)
  createdAt: string

  @Field(() => String)
  updatedAt: string

  @Field(() => [Breed])
  breeds: Breed[]

  @Field(() => [Pet])
  pets: Pet[]
}
