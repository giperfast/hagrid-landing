import { Module, forwardRef } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { QuestionsModule } from './questions/questions.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { AvatarModule } from './avatar/avatar.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/public',
      rootPath: join(__dirname, '..', 'public'),
    }),
    QuestionsModule,
    TestimonialsModule,
    AvatarModule
  ],
})

export class AppModule {}