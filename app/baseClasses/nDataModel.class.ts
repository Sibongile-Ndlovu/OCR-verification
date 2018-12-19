import { user } from '../src/app/models/user.model';
import { userdetails } from '../src/app/models/userdetails.model';
import { count } from '../src/app/models/count.model';
import { rejectCount } from '../src/app/models/rejectCount.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
userdetails: userdetails;
count: count;
rejectcount: rejectCount;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.userdetails = new userdetails();
this.count = new count();
this.rejectcount = new rejectCount();
//CREATE NEW DM INSTANCE
    }
}