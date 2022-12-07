import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INameAndId } from '@core/interfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DegreesService {
    constructor(private readonly httpClient: HttpClient) {}

    public getDegrees(): Observable<INameAndId[]> {
        return this.httpClient.get<INameAndId[]>(
            'assets/mocks/degrees/degrees.json'
        );
    }
}
