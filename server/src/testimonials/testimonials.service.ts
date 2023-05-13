import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class TestimonialsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async get(page: number, limit: number): Promise<object> {
    const total_records_count = await this.databaseService.testimonial.count()
    const records = await this.databaseService.testimonial.findMany({
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

    return {
      total_records_count: total_records_count,
      records
    }
  }
}

