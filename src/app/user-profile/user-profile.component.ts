import { Component } from '@angular/core';
import { User } from '../userClass';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = new User('Doe', 'John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg', false);
}
