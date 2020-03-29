import { Injectable } from '@nestjs/common';
import { User } from 'src/common/models/user.model'; 
import { ModelCtor } from 'sequelize/types';

@Injectable()
export class UserService {
    model: ModelCtor<User>;
    constructor(){
        this.model = User;
    }

    createOne(): void {
        this.model.create({login: 'test', password: 'boom'});
    }
}
