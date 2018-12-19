import { user } from '../src/app/models/user.model';
import { userdetails } from '../src/app/models/userdetails.model';
import { count } from '../src/app/models/count.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
userdetails: userdetails;
count: count;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.userdetails = new userdetails();
this.count = new count();
//CREATE NEW DM INSTANCE
    }
}