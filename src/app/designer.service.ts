import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignerService {

  constructor() { }
  preset(): boolean {
    return true;
  }
}