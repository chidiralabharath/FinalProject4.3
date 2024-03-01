// frontend/src/app/player-list/player-list.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: any[] = []; // Initialize to an empty array

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPlayers();
  }

  fetchPlayers(): void {
    this.http.get<any[]>('http://localhost:3000/api/players')
      .subscribe(
        players => {
          this.players = players;
        },
        error => {
          console.error('Error fetching players:', error);
        }
      );
  }
}
