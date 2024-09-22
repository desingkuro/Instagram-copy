import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-suggestion',
  standalone: true,
  imports: [],
  templateUrl: './suggestion.component.html',
  styleUrl: './suggestion.component.css'
})
export class SuggestionComponent {
  @Input() name:string = '';
  @Input() img:string = '';
}
