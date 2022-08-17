import { ObjectType, Field, Float } from '@nestjs/graphql'
import { Breed } from '../../breed/entities/breed.entity'
import { Category } from '../../category/entities/category.entity'
import { User } from '../../user/entities/user.entity'

@ObjectType()
export class Pet {
  @Field(() => String)
  id: string

  @Field(() => String)
  name: string

  @Field(() => Float, { nullable: true })
  age?: number

  @Field(() => String)
  description: string

  @Field(() => [String], { defaultValue: [] })
  photos: string[]

  @Field(() => Category, { nullable: true })
  category?: Category

  @Field(() => String, { nullable: true })
  categoryId?: string

  @Field(() => Breed, { nullable: true })
  breed?: Breed

  @Field(() => String, { nullable: true })
  breedId?: string

  @Field(() => User, { nullable: true })
  owner?: User

  @Field(() => String, { nullable: true })
  ownerId?: string

  @Field(() => Boolean, { defaultValue: true })
  isAvailable: boolean

  @Field(() => String)
  createdAt: string

  @Field(() => String)
  updatedAt: string
}
