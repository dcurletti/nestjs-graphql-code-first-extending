import {ResolveField, Resolver} from '@nestjs/graphql';
import { Recipe } from './recipes.model';

@Resolver(of => Recipe)
export class RecipesResolver {
    @ResolveField()
    foobar() {
        return 'foobar'
    }
}
