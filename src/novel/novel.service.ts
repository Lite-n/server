import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios'

@Injectable()
export class NovelService {
  constructor (private readonly httpService: HttpService) {}

  getLatest(): Observable<AxiosResponse<Object[]>> {
    return this.httpService.get('https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbentrydia76910913002&QueryType=ItemNewAll&MaxResults=10&start=1&CategoryId=50927&Cover=Big&output=js&Version=20131101')
      .pipe(map((response) => response.data.item))
  }

  getBestSeller(): Observable<AxiosResponse<Object[]>> {
    return this.httpService.get('https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbentrydia76910913002&QueryType=BestSeller&MaxResults=10&start=1&CategoryId=50927&Cover=Big&output=js&Version=20131101')
      .pipe(map((response) => response.data.item))
  }

  getOne(title: string): Observable<AxiosResponse<Object[]>> {
    return this.httpService.get(`http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbentrydia76910913002&Query=${title}&QueryType=Title&Cover=Big&MaxResults=5&start=1&SearchTarget=Book&output=js&Version=20131101`)
      .pipe(map((response) => response.data.item))
  }

}