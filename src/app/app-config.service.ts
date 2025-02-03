import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
    transitionComplete(): boolean {
        return true;
    }

    preset(): boolean {
        return true;
    }
}