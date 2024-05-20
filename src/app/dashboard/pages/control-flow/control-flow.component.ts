import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';


type grade = 'A'|'B'|'F';
@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  imports:[CommonModule, TitleComponent],
  styles: ``,
  standalone:true
})
export class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<grade>('A');

  public frameworks = signal( ['Angular','Vue','Svelte','Qwik','React',]);
  public frameworks2 = signal( []);

  public toggleContent(){
    this.showContent.update(value => !value);

  }

}
