import { Observable } from "rxjs/Rx";
import { Error } from "tslint/lib/error";
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { AuthService } from "./auth.service";

export class AuthInterceptor implements HttpInterceptor {
  constructor(private as: AuthService) {}

  bearer: string;

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.as.token != "") {
      let cloned = req.clone({
        setHeaders: { Authorization: `Bearer ${this.as.token}` }
      });
      console.log(
        "Vouchers-Interceptor added Bearer Token for request",
        cloned
      );
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
