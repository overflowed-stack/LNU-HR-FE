import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INameAndId } from '@core/interfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SubjectsService {
    constructor(private readonly httpClient: HttpClient) {}

    public getSubjects(): Observable<INameAndId[]> {
        return this.httpClient.get<INameAndId[]>(
            'assets/mocks/subjects/subjects.json'
        );
    }
}
