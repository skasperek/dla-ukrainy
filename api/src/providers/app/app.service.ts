import { Injectable, Req } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async googleLoginAsync(
    @Req() req
  ){
    return "asd";
  }
}
