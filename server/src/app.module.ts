import { Module, forwardRef } from '@nestjs/common';
import { QuestionsModule } from './questions/questions.module';
import { DatabaseModule } from './database/database.module';

@Module({
  controllers: [],
  providers: [],
  imports: [QuestionsModule],
})

export class AppModule {}
