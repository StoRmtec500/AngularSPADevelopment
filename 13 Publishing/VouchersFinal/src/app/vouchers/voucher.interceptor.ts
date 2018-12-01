import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Rx";
import { Error } from "tslint/lib/error";
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";

export class VouchersInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let cloned = req.clone({
      setHeaders: {Authorization: `Bearer ${environment.token}`}
    });
    console.log("Vouchers-Interceptor added Bearer Token for request", cloned);
    return next.handle(cloned);
  }
}
