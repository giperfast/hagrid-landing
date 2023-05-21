import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma, PrismaClient } from '@prisma/client'
import { DatabaseExtended } from '../database/database.extends'
import { ReturnDto } from "./dto/questions.dto";

@Injectable()
export class QuestionsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async get(page: number, limit: number): Promise<ReturnDto> {
    const databaseExtended = DatabaseExtended(this.databaseService);
    const total_records_count: number = await databaseExtended.question.count();
    const records = await databaseExtended.question.findMany({
      skip: Number((page - 1) * limit),
      take: Number(limit),

      include: {
        answer: true,
        user: {
          include: {
            profile: true,
            testimonials: true,
          },
        }
      }
    });

    return {total_records_count, records}
  }
}

