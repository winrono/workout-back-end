import { Injectable } from '@nestjs/common';
import { User } from 'src/common/models/user.model';
import { ModelCtor } from 'sequelize/types';
import { StronglyTypedModel } from 'src/common/models/utils/strongly-typed.model';

@Injectable()
export class UserService {
    model: ModelCtor<User>;
    constructor() {
        this.model = User;
    }

    createOne(user: StronglyTypedModel<User>): void {
        this.model.create(user);
    }

    async getAll(): Promise<User[]> {
        return this.model.findAll<User>();
    }
}
