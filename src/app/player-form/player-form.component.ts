// frontend/src/app/player-form/player-form.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {
  player = {
    name: '',
    age: null,
    team: '',
    position: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit(): void {
    this.http.post<any>('http://localhost:3000/api/players', this.player)
      .subscribe(
        () => {
          console.log('Player added successfully');
        
        },
        error => {
          console.error('Error adding player:', error);
        }
      );
  }
}
