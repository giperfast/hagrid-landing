import { IsNumber  } from 'class-validator'

export class GetDto
{
    @IsNumber ()
    page: number

    @IsNumber ()
    limit: number
}