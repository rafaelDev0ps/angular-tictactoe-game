import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
//  This is a Dumb Component
export class SquareComponent {

  constructor() { }

  @Input() value: 'X' | 'O';

}
