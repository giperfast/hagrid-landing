import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { DatabaseExtended } from '../database/database.extends'
import { ReturnDto } from "./dto/testimonials.dto";

@Injectable()
export class TestimonialsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async get(page: number, limit: number): Promise<ReturnDto> {
    const databaseExtended = DatabaseExtended(this.databaseService);
    const total_records_count = await databaseExtended.testimonial.count()
    const records = await databaseExtended.testimonial.findMany({
      skip: Number((page - 1) * limit),
      take: Number(limit),

      include: {
        user: {
          include: {
            profile: true,
          },
        }
      }
    });

    return {total_records_count, records}
  }
}

