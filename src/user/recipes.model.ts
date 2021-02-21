import { Field, ID, ObjectType } from '@nestjs/graphql';

import {Recipe as RecipeModel} from '../recipes/models/recipe.model'

@ObjectType()
export class Recipe extends RecipeModel {
    @Field()
    foobar: string;
}
