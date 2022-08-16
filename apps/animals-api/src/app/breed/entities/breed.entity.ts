import { ObjectType, Field } from '@nestjs/graphql'
import { Category } from '../../category/entities/category.entity'
import { Pet } from '../../pet/entities/pet.entity'

@ObjectType()
export class Breed {
  @Field(() => String)
  id: string

  @Field(() => String)
  name: string

  @Field(() => String)
  createdAt: string

  @Field(() => String)
  updatedAt: string

  @Field(() => Category, { nullable: true })
  category?: Category

  @Field(() => String, { nullable: true })
  categoryId?: string

  @Field(() => [Pet], { defaultValue: [] })
  pets: Pet[]
}
