import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { PetService } from './pet.service'
import { Pet } from './entities/pet.entity'
import { CreatePetInput } from './dto/create-pet.input'
import { UpdatePetInput } from './dto/update-pet.input'
import { CurrentUser } from '@coulbyl/auth'
import { User } from '../user/entities/user.entity'

@Resolver(() => Pet)
export class PetResolver {
  constructor(private readonly petService: PetService) {}

  @Mutation(() => Pet)
  createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
    @CurrentUser() user: User,
  ) {
    return this.petService.create(createPetInput, user)
  }

  @Query(() => [Pet], { name: 'pets' })
  findAll() {
    return this.petService.findAll()
  }

  @Query(() => Pet, { name: 'pet' })
  findOne(@Args('id') id: string) {
    return this.petService.findOne(id)
  }

  @Mutation(() => Pet)
  updatePet(@Args('updatePetInput') updatePetInput: UpdatePetInput) {
    return this.petService.update(updatePetInput)
  }

  @Mutation(() => Pet)
  removePet(@Args('id') id: string) {
    return this.petService.remove(id)
  }
}
