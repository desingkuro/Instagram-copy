import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() userName: string = '';
  @Input() likes: number = 0;
  @Input() coments: number = 0;
  @Input() img: string = '';
  @Input() imgUser: string = '';
}
