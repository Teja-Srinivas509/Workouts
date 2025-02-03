import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // This ensures the service is available throughout the app
})
export class DesignerService {

  constructor() { }

  // Simulate the 'preset' method that you referenced
  preset(): boolean {
    // Example: return true if preset exists or some condition is met
    return true;
  }
}
