import { HttpInterceptorFn } from '@angular/common/http';

export const myInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
