import { AbstractControl, FormGroup } from '@angular/forms';

// trying to implement the same way as inbuilt vlaidators
export class CustomValidator {
  // AbstractControl is a base class for everything
  // formGroup, formControl, formArray
  static ValidateName(control: AbstractControl) {
    const val = control.value as string;
    if (val.includes('test')) {
      return {
        invalidName: true,
      };
    }
    return null;
  }

  static ValidateSpecialChar(char: string) {
    return (control: AbstractControl) => {
      const val = control.value;
      if (val.includes(char)) {
        return {
          invalidSpecialChar: true,
        };
      }
      return null;
    };
  }

  static validateDate(control: FormGroup) {
    const checkinDate: any = new Date(control.get('checkinDate')?.value);
    const checkoutDate: any = new Date(control.get('checkoutDate')?.value);

    console.log(control.get('checkinDate')?.value, checkoutDate);

    const diffTime = checkoutDate - checkinDate;
    const diffDays = Math.ceil((diffTime / 24) * 60 * 60 * 1000);

    console.log(diffTime, diffDays);

    console.log(diffDays);
    if (diffDays <= 0) {
      // control.get('checkoutDate')?.setErrors({
      //   invalidDate: true,
      // });

      return {
        invalidDate: true,
      };
    }
    return null;
  }
}
