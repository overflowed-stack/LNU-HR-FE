import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage } from '@core/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class PagesService {
    constructor(private readonly httpClient: HttpClient) {}

    public getPage(pageNumber: number): Observable<IPage> {
        return this.httpClient.get<IPage>('assets/mocks/pages/page.json');
    }
}
