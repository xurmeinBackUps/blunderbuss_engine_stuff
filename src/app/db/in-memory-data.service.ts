import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const user = [
      { id: 1, username: 'Test', password: 'test' }
    ];
    return user
  }
  
}
