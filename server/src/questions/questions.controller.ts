import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { GetDto } from './dto/questions.dto';

@Controller('questions')
export class QuestionsController {
  constructor(
    private readonly questionsService: QuestionsService) {}

  @Get()
  @UsePipes(new ValidationPipe())
  getByPage(@Query() {page, limit}: GetDto): object {
    return this.questionsService.get(page, limit);
  }
}
