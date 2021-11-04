import {Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {UserDto} from "./dto/user.dto";

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    return "getUsers Success";
  }

  @Get("/:id")
  getUserById(
    @Param('id', ParseIntPipe) id: number
  ) {
    return `getUserById Success Params [id: ${id}]`
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() userDto: UserDto) {
    const { id } = userDto;
    return `createUser Success Params ${id}`;
  }
}
