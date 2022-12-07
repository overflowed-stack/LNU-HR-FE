import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INameAndId, IPerson } from '@core/interfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    constructor(private readonly httpClient: HttpClient) {}

    public getPersonnel(): Observable<INameAndId[]> {
        return this.httpClient.get<INameAndId[]>(
            'assets/mocks/personnel/personnel.json'
        );
    }

    public getPerson(id: string): Observable<IPerson> {
        return this.httpClient.get<IPerson>(
            'assets/mocks/personnel/person.json'
        );
    }
}
