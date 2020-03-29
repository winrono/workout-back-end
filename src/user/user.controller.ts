import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly _userService: UserService){

    }

    @Post()
    create(@Body() body: any): void {
        this._userService.createOne({login: body.login, password: body.password});
    }
    
}
