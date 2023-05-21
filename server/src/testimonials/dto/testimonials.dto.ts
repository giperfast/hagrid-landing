import { IsInt, Min } from 'class-validator'
import { Type } from 'class-transformer';

export class GetDto
{
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page: number

    @Type(() => Number)
    @IsInt()
    @Min(1)
    limit: number
}

export type ReturnDto = {
    total_records_count: number
    records: object
}