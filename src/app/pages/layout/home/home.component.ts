import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../../../shared/service/auth/instagram.service';
import { PostComponent } from '../../../shared/components/post/post.component';
import { Friend, friends,Post,Story } from '../../../shared/interfaces/friends';
import { StorieComponent } from '../../../shared/components/storie/storie.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostComponent,StorieComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  posts:Post[] = [];
  histories:Story[] = [];
  friendsList:Friend[] = [];

  constructor(
    private instagrammService:InstagramService
  ){}
  ngOnInit(): void {
    this.friendsList = this.instagrammService.getFriendsUser()
  }
}
