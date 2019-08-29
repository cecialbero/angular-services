import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {

  user: any;

  constructor(private service: UserInfoService) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe(response => {
        this.user = response;
      });
  }

}
