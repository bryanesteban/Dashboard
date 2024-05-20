import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-views',
  templateUrl: './defer-views.component.html',
  standalone: true,
  imports:[CommonModule, HeavyLoadersSlowComponent, TitleComponent]
})
export class DeferViewsComponent {

}
