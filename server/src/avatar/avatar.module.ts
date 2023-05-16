import { Module } from '@nestjs/common';
import { AvatarService } from './avatar.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [AvatarService],
  exports: []
})

export class AvatarModule {}