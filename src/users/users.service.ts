import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
   

    welcomfunction(){
        return "Wel-come to the next js appliction creation.....!!";
    }
    createUsers() {
        return "added users...!!";
    }

    getUsers() {
        return "get all the users..!!";
    }
}
