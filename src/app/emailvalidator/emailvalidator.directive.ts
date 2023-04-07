import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appEmailvalidator]',
  // copy from documentation (alt+click)
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailvalidatorDirective,
      multi: true,
    },
  ],
})
export class EmailvalidatorDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const val = control.value as string;
    if (val?.includes('test')) {
      return {
        invalidEmail: true,
      };
    }
    return null;
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}
