import { Component, signal } from '@angular/core';


type grade = 'A'|'B'|'F';
@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styles: ``,
  standalone:true
})
export class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<grade>('A');

  public toggleContent(){
    this.showContent.update(value => !value);

  }

}
