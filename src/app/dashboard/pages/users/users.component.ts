import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: ``,
  standalone: true,
  imports:[ CommonModule, TitleComponent, RouterModule]
})
export class UsersComponent {

  public userService = inject( UsersService);



}
