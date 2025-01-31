import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  UnauthorizedException,
} from '@nestjs/common';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { Response } from 'express';

@Catch(JsonWebTokenError, TokenExpiredError, UnauthorizedException)
export class JwtExceptionFilter implements ExceptionFilter {
  catch(
    _exception: JsonWebTokenError | TokenExpiredError,
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (response.req.authInfo instanceof TokenExpiredError) {
      return response.status(401).json({
        statusCode: 401,
        message: 'Token has expired',
        error: 'Unauthorized',
      });
    }

    return response.status(401).json({
      statusCode: 401,
      message: 'Invalid token',
      error: 'Unauthorized',
    });
  }
}
