import { Component } from '@angular/core';
import { UsersdataService } from "./services/usersdata.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name = 'Atharva!';
  users: any;
  constructor(private usersdata: UsersdataService) {
    this.usersdata.users().subscribe((data) => {
      console.log(data)
      this.users = data;
    })
    console.warn(this.users)
  }

  getUserFormData(data: any) {
    console.log(data)
    this.usersdata.saveUser(data).subscribe((result) => {
      console.log(result)
    })
  }
}

