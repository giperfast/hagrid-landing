import { Module, forwardRef } from '@nestjs/common';
import { QuestionsModule } from './questions/questions.module';
import { TestimonialsModule } from './testimonials/testimonials.module';

@Module({
  controllers: [],
  providers: [],
  imports: [QuestionsModule, TestimonialsModule],
})

export class AppModule {}
