import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// Defines the maximum number of requests allowed per minute
const MAX_REQUESTS_PER_MINUTE = 2;
// Defines the size of the sliding window in milliseconds
const WINDOW_SIZE_MS = 60 * 1000;

@Injectable()
export class RateLimiterMiddleware implements NestMiddleware {
  private requestCounts: Map<string, number> = new Map<string, number>();
  private requestTimestamps: Map<string, number[]> = new Map<
    string,
    number[]
  >();

  use(req: Request, res: Response, next: NextFunction) {
    const { ip } = req;
    const currentTime = Date.now();
    const userRequestCounts = this.requestCounts.get(ip) || 0;
    const userRequestTimestamps = this.requestTimestamps.get(ip) || [];

    // Delete timestamps outside the sliding window
    while (
      userRequestTimestamps.length > 0 &&
      userRequestTimestamps[0] < currentTime - WINDOW_SIZE_MS
    ) {
      userRequestTimestamps.shift();
    }

    // Check if the number of user requests exceeds the limit
    if (userRequestCounts >= MAX_REQUESTS_PER_MINUTE) {
      res.status(HttpStatus.TOO_MANY_REQUESTS).json({
        message: '429 Too Many Requests, please try later',
      });
      return;
    }

    // update request count and timestamp
    this.requestCounts.set(ip, userRequestCounts + 1);
    this.requestTimestamps.set(ip, [...userRequestTimestamps, currentTime]);

    next();
  }
}
