import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BreedService } from './breed.service'
import { Breed } from './entities/breed.entity'
import { CreateBreedInput } from './dto/create-breed.input'
import { UpdateBreedInput } from './dto/update-breed.input'

@Resolver(() => Breed)
export class BreedResolver {
  constructor(private readonly breedService: BreedService) {}

  @Mutation(() => Breed)
  createBreed(@Args('createBreedInput') createBreedInput: CreateBreedInput) {
    return this.breedService.create(createBreedInput)
  }

  @Query(() => [Breed], { name: 'breeds' })
  findAll() {
    return this.breedService.findAll()
  }

  @Query(() => Breed, { name: 'breed' })
  findOne(@Args('id') id: string) {
    return this.breedService.findOne(id)
  }

  @Mutation(() => Breed)
  updateBreed(@Args('updateBreedInput') updateBreedInput: UpdateBreedInput) {
    return this.breedService.update(updateBreedInput)
  }

  @Mutation(() => Breed)
  removeBreed(@Args('id') id: string) {
    return this.breedService.remove(id)
  }
}
