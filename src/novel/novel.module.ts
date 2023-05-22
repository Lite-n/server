import { Module } from '@nestjs/common';
import { NovelService } from './novel.service';
import { HttpModule } from '@nestjs/axios'
import { NovelController } from './novel.controller';

@Module({
  imports: [HttpModule],
  controllers: [NovelController],
  providers: [NovelService]
})
export class NovelModule {}
