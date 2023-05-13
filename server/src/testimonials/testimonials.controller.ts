import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';
import { GetDto } from './dto/testimonials.dto';

@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Get()
  @UsePipes(new ValidationPipe())
  getByPage(@Query() {page, limit}: GetDto): object {
    return this.testimonialsService.get(page, limit);
  }
}
