import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/test")
  getRootRoute() {
    return "Hello World!";
  }

  @Get("/bye")
  getByeThere() {
    return "Bye there!";
  }
}
