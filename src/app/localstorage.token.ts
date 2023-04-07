import { InjectionToken } from '@angular/core';

export const localStorageToken = new InjectionToken<any>('local storage', {
  providedIn: 'root',
  factory() {
    // returns new instance of local storage
    return localStorage;
  },
});
