import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class CepModel {
    @Field()
    description: string;
    @Field()
    rate: number;
    @Field()
    quantity: number
}