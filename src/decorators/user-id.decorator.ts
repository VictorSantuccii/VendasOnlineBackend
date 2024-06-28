import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { log } from "console";
import { authorizationToLoginPayload } from "../utils/base-64-converter";

export const UserId = createParamDecorator(
    (_, ctx: ExecutionContext) => {

        const request = ctx.switchToHttp().getRequest();
    const { authorization } = request.headers;

    const loginPayload = authorizationToLoginPayload(authorization)
        
        return loginPayload?.id;

    }
      
  );