import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FacebookGuard } from 'src/guards/app/facebook.guard';
import { GoogleGuard } from 'src/guards/app/google.guard';
import { AppService } from '../../providers';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("google")
  @UseGuards(GoogleGuard)
  async googleAuth(
    @Req() req
  ){
    console.log(req)
  }

  @Get("google/callback")
  @UseGuards(GoogleGuard)
  async googleAuthCallback(
    @Req() req
  ) {
    return this.appService.googleLoginAsync(req);
  }

  @Get("facebook")
  @UseGuards(FacebookGuard)
  async facebookAuth(
    @Req() req
  ){
    console.log(req)
  }

  @Get("facebook/callback")
  @UseGuards(FacebookGuard)
  async facebookAuthCallback(
    @Req() req
  ) {
    return this.appService.googleLoginAsync(req);
  }
}
