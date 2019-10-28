import { ErrorHandler, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService implements ErrorHandler {

  public handleError(httpError: HttpErrorResponse) { 
    let errorMessage = "";

    const { status, statusText, message, url, error } = httpError;

    if (status === 400) {
      errorMessage = error.msg
        ? error.msg
        : "Error en la petición al Servidor. Verificar los campos.";
    }

    if (status === 401) {
      errorMessage = error.msg ? error.msg : "Credenciales inválidas.";
    }

    if (status === 403) {
      errorMessage = error.msg ? error.msg : "Sin autorización.";
    }

    if (status === 404) {
      errorMessage = error.msg
        ? error.msg
        : "No se encontró el recurso solicitado.";
    }
    console.error(status);

    if (status === 500) {

      /* if (error.errors) {
        if (error.errors === "invalid email.") {
          errorMessage = "El email es inválido.";
        } else if (error.errors === "invalid password.") {
          errorMessage = "La contraseña es inválida.";
        }
      } else {
      } */
      errorMessage = error.msg
        ? error.msg
        : "Se produjo un error en el servidor y la operación no pudo completarse.";

    }

    if (status === 422) {
      errorMessage = error.errors;
    }

    return throwError(
      errorMessage
        ? errorMessage
        : "Algo no salió bien y la operación no se completó."
    );
  }
}
