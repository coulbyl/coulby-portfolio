import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Breed } from '../../breed/entities/breed.entity'
import { Category } from '../../category/entities/category.entity'
import { User } from '../../user/entities/user.entity'

@ObjectType()
export class Pet {
  @Field(() => String)
  id: string

  @Field(() => String)
  name: string

  @Field(() => Int, { nullable: true })
  age?: number

  @Field(() => String)
  description: string

  @Field(() => [String])
  photos: string[]

  @Field(() => Category)
  category?: Category

  @Field(() => String)
  categoryId?: string

  @Field(() => Breed)
  breed?: Breed

  @Field(() => String)
  breedId?: string

  @Field(() => User)
  owner?: User

  @Field(() => String)
  ownerId?: string

  @Field(() => String)
  createdAt: string

  @Field(() => String)
  updatedAt: string
}
