import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  posts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((data) => {
      this.users = data;
    });

    this.dataService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  showDetails(user: any): void {
    // Implement the logic to show user details here (e.g., navigate to a user details page).
    console.log('User Details:', user);
  }
}
