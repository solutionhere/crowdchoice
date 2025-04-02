import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories: any[] = [];
  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}