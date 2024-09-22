import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-storie',
  standalone: true,
  imports: [],
  templateUrl: './storie.component.html',
  styleUrl: './storie.component.css'
})
export class StorieComponent {
  @Input() name:string = '';
  @Input() img:string = '';
}
