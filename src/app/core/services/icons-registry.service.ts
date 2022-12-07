import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

interface IIconRequest {
    id: string;
    output: BehaviorSubject<string>;
}

@Injectable({
    providedIn: 'root',
})
export class IconsRegistryService {
    private requestQueue: IIconRequest[] = [];

    private readonly svgRoot: SVGElement;

    constructor(
        private readonly httpClient: HttpClient,
        @Inject(DOCUMENT) private readonly document: Document
    ) {
        const svgRoot: SVGElement = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
        );

        svgRoot.setAttribute('viewBox', '0 0 24 25');

        this.svgRoot = svgRoot;
    }

    public setIconSet(url: string): void {
        this.httpClient
            .get(url, {
                responseType: 'text',
            })
            .pipe(
                tap((svgBody: string) => {
                    this.svgRoot.innerHTML = svgBody;

                    this.resolveRequests();
                })
            )
            .subscribe();
    }

    public getIcon(iconId: string): Observable<string> {
        const newOutput: BehaviorSubject<string> = new BehaviorSubject<string>(
            ''
        );

        this.addToRequestQueue({
            id: iconId,
            output: newOutput,
        });

        return newOutput.asObservable();
    }

    private addToRequestQueue(request: IIconRequest): void {
        this.requestQueue.push(request);

        if (this.svgRoot.innerHTML) {
            this.resolveRequests();
        }
    }

    private resolveRequests(): void {
        this.requestQueue.forEach((currentRequest: IIconRequest) => {
            const iconElement: HTMLElement | null = this.svgRoot.querySelector(
                `#${currentRequest.id}`
            );

            if (iconElement) {
                currentRequest.output.next(iconElement.innerHTML);

                return;
            }

            console.error(
                `%cError: There is no icon with id: ${currentRequest.id}`,
                'font-size: 32px;'
            );
        });

        this.requestQueue = [];
    }
}
