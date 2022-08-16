import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CategoryService } from './category.service'
import { Category } from './entities/category.entity'
import { CreateCategoryInput } from './dto/create-category.input'
import { UpdateCategoryInput } from './dto/update-category.input'
import { ValidResponse } from '@coulbyl/statics-data'

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  create(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoryService.create(createCategoryInput)
  }

  @Query(() => [Category], { name: 'categories' })
  findAll() {
    return this.categoryService.findAll()
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args('id') id: string) {
    return this.categoryService.findOne(id)
  }

  @Mutation(() => Category)
  updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoryService.update(updateCategoryInput)
  }

  @Mutation(() => ValidResponse)
  removeCategory(@Args('id') id: string) {
    return this.categoryService.remove(id)
  }
}
