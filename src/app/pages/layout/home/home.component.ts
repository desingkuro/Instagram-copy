import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../../../shared/service/auth/instagram.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(
    private instagrammService:InstagramService
  ){}
  ngOnInit(): void {
    
  }
}
