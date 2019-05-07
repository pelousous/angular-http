import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ServerService {
    constructor(private http: Http) {} 
    storeServers(servers: any[]) {
        return this.http.put('https://usemy-ng-http-c5c9d.firebaseio.com/data.json', servers);
    }
    getServers() {
        return this.http.get('https://usemy-ng-http-c5c9d.firebaseio.com/data.json')
        .pipe(
            map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            )
        );
        
    }
}

