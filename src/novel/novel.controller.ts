import { Controller, Get, Param } from '@nestjs/common';
import { NovelService } from './novel.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller('api/novel')
export class NovelController {
  constructor ( private readonly novelService: NovelService ) {}

  @Get('latest')
  getLatest(): Observable<AxiosResponse<Object[]>> {
    return this.novelService.getLatest()
  }

  @Get('bestseller')
  getBestSeller(): Observable<AxiosResponse<Object[]>> {
    return this.novelService.getBestSeller()
  }

  @Get('search/:title')
  findOne(@Param() params: any): Observable<AxiosResponse<Object[]>> {
    return this.novelService.getOne(params.title)
  }

}