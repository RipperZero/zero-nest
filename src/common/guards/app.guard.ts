import { RoleValue } from "@/constants";
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";

@Injectable()
class AppGuard implements CanActivate {
  @Inject(Reflector)
  private readonly reflector: Reflector;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const contextType = context.getType();

    if (contextType === "http") {
      // maybe undefined
      const classRoles = this.reflector.get<RoleValue[]>(
        "roles",
        context.getClass(),
      );
      // maybe undefined
      const handlerRoles = this.reflector.get<RoleValue[]>(
        "roles",
        context.getHandler(),
      );

      console.log("classRoles-----", classRoles);
      console.log("handlerRoles-----", handlerRoles);

      // if (handlerRoles?.includes("zero")) {
      //   return true;
      // }

      // return false;
      return true;
    }

    return false;
  }
}

export { AppGuard };
