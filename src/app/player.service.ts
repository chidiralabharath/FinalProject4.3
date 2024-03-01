// frontend/src/app/player.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl = 'http://localhost:3000/api/players'; // Change this URL according to our backend API

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get<any[]>(this.baseUrl);
  }

  addPlayer(player: any) {
    return this.http.post<any>(this.baseUrl, player);
  }
}
