import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of} from 'rxjs';
import { ModalsComponent } from './modals/modals.component';

@Injectable({
  providedIn: 'root'
})
export class HandleHttpErrorService {

  constructor(private modalService:NgbModal) { }

  public handleError<T>(operation = 'operation', result?:T)
  {
    return(error:any):Observable<T>=>{
      if (error.status == "400") {
        this.error400(error);
      }
      return of(result as T);
    }
  }

  public log(message:string){
    const modal = this.modalService.open(ModalsComponent);
    modal.componentInstance.title = 'Mensaje';
    modal.componentInstance.message = (`${message}`);
  }

  public error400(error:any):void{
    let validaciones:number = 0;
    let mensaje: string = `Señor usuario, error de validacion, reviselos e intente nuevamente`;

    for(const prop in error.error.errors){
      validaciones++;
      mensaje += `<strong>${validaciones}.${prop}:</strong>`;

      error.error.errors[prop].forEach(element => {
        mensaje += `<br/> - ${element}`;
      });

      mensaje += `<br/>`;
    }

    const modal = this.modalService.open(ModalsComponent);
    modal.componentInstance.title = "Mensaje de Error";
    modal.componentInstance.message = mensaje;
  }
}
