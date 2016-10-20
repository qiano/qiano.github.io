import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'admin-component',
  templateUrl: "app/admin/admin.component.html"
})
export class AdminComponent {
  private username = this.auth.CurrentUser.Username;

  constructor(private auth: AuthService) { }

}