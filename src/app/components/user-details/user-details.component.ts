import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = params['id'];
      console.log('User ID:', userId); // Log the user ID
      this.dataService.getUser(userId).subscribe((user) => {
        console.log('User Data:', user); // Log the user data
        this.user = user;
      });
    });
  }

  navigateToUserPosts(): void {
    const userId = this.user.id; // Get the user's ID
    this.router.navigate(['user', userId, 'posts']); // Navigate to the user's posts page
  }
}
