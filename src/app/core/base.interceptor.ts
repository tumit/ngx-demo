import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from "rxjs";

export class BaseInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.startsWith('./')) {
      req = req.clone({
        url: this.getApiUrl(req.url)
      });
    }
    return next.handle(req);
  }

  private getApiUrl(reqPath: string): string {
    const path = reqPath.startsWith('/') ? reqPath : '/' + reqPath;
    return environment.apiUrl + path;
  }
}
