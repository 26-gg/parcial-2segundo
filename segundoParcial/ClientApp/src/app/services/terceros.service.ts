import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Tercero } from '../models/tercero';
import { tap,catchError} from 'rxjs/operators';

const httOptions= {
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TercerosService {

  baseUrl:string;
  constructor(private http:HttpClient,@Inject('BASE_URL') baseUrl:string,
  private handleError:HandleHttpErrorService) { this.baseUrl = baseUrl}

  buscar(identificacion:string):Observable<Tercero>
  {
    return this.http.get<Tercero>(this.baseUrl + 'api/Tercero/' + identificacion).pipe(
      tap(_=> this.handleError.log('buscado')),
      catchError(this.handleError.handleError<Tercero>('Consulta de tercero'))
    );
  }
}
