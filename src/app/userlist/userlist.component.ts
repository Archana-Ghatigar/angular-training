import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userList = new Array<User>();
     
    constructor(){            
    }
    ngOnInit() {
        
        
    }
}
