import { ErrorHandler } from '@angular/core';

// implements have to override all the methods and properties avilable
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log(error);
  }
}
