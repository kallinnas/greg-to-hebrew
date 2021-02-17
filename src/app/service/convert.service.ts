import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {
  private url = environment.baseUrl;
  // private url = 'http://localhost:8080/api/';

  public constructor(private httpClient: HttpClient) {
  }

  public gregToHebrew(gregDate: Date): Observable<any> {
    return this.httpClient.post<any>(
      this.url + gregDate.getUTCFullYear() + '/' + gregDate.getMonth() + '/' + gregDate.getDay(),
      null,
      {withCredentials: false}
    );
  }

}
