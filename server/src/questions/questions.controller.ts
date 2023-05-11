import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { GetDto } from './dto/questions.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @UsePipes(new ValidationPipe())
  @Get()
  getByPage(@Query() dto: GetDto) {
    console.log(dto)
    return this.questionsService.get(1, 2);

    //return this.questionsService.getAll();
  }

  @Get('/create')
  create() {
    return this.questionsService.create();
  }
}
