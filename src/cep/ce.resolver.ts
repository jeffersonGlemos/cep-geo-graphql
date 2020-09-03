import {Args, Query, Resolver} from '@nestjs/graphql';
import {CepModel} from "./cep.model";

@Resolver(of => CepModel)
export class CustomerResolver {

    @Query(returns => CepModel)
    async customer(@Args('id') id: string): Promise<any[]> {
        return [];
    }
}