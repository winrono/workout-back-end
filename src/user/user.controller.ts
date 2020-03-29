import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly _userService: UserService){

    }

    @Get()
    create(): void {
        this._userService.createOne();
    }
    
}
