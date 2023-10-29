import { Controller, Get } from '@nestjs/common';
import { ApiProperty, ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { DbService } from './db/db.service';

class HelloWorldDTO {
  @ApiProperty()
  message: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private dbService: DbService) {}

  @Get()
  @ApiOkResponse({
    type: HelloWorldDTO
  })
  async getHello(): Promise<HelloWorldDTO> {
    const users = await this.dbService.user.findMany({})

    console.log(users)
    return {message: this.appService.getHello()};
  }
}
