import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
class LogInterceptor implements NestInterceptor {
  intercept(
    _executionContext: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const startStamp = Date.now();
    console.log(`Start at ${startStamp}`);

    return next.handle().pipe(
      tap(() => {
        const nowStamp = Date.now();
        console.log(`After---- +${nowStamp - startStamp}ms`);
      }),
    );
  }
}

export { LogInterceptor };
