import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  // to group multiple controls
  bookingForm!: FormGroup;

  // getter
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomid');
    console.log(roomId);
    this.bookingForm = this.fb.group(
      {
        // roomId: new FormControl(''), // or ['']
        roomId: new FormControl(
          { value: roomId, disabled: true },
          { validators: [Validators.required] }
        ), // or ['']
        guestEmail: [
          '',
          {
            updateOn: 'blur',
            Validators: [Validators.required, Validators.email],
          },
        ],
        checkinDate: [''],
        checkoutDate: [''],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: new FormControl(
          { value: '', disabled: false },
          // blur is an event which will be called once u moved out of the control
          { updateOn: 'blur' }
        ),
        guestName: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            CustomValidator.ValidateName,
            CustomValidator.ValidateSpecialChar('*'),
          ],
        ],
        // Nested
        address: this.fb.group({
          addressLine1: ['', [Validators.required]],
          addressLine2: [''],
          city: ['', [Validators.required]],
          state: ['', [Validators.required]],
          country: [''],
          zipCode: [''],
        }),

        // form Array
        guests: this.fb.array([
          this.fb.group({
            guestName: ['', [Validators.required]],
            age: new FormControl(''),
          }),
        ]),

        tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
      },
      { updateOn: 'blur', Validators: [CustomValidator.validateDate] }
    );

    // it will be called for each key press may leads to performance issues (we can change this behaviour)
    this.bookingForm.valueChanges.subscribe((data) => console.log(data));

    // this.addBooking();

    // this.bookingForm.valueChanges.subscribe((data) => {
    //   this.bookingService.bookRoom(data).subscribe((data) => console.log(data));
    // });

    // // MergeMap does not care about the sequence
    // // It will try to POST or subscribe to the stream as soon as the data is provided

    // this.bookingForm.valueChanges
    //   .pipe(mergeMap((data) => this.bookingService.bookRoom(data)))
    //   .subscribe((data) => console.log(data));

    // // we can see a lot of request being cancelled
    // // switchMap will cancel any existing request if it recieves a new data
    // // so lets say we care about who ever has subscribe to our stream should get the latest data only, previous data or stream which is raised should be cancelled.
    // this.bookingForm.valueChanges
    //   .pipe(switchMap((data) => this.bookingService.bookRoom(data)))
    //   .subscribe((data) => console.log(data));

    // // in case we care that request we made should be completed before we make a new request
    // this.bookingForm.valueChanges
    //   .pipe(exhaustMap((data) => this.bookingService.bookRoom(data)))
    //   .subscribe((data) => console.log(data));
  }

  addBooking() {
    // this.bookingService
    //   .bookRoom(this.bookingForm.getRawValue())
    //   .subscribe((data) => console.log(data));

    // NOTE: have to set values for all the controls
    // this.bookingForm.setValue({
    //   roomId: '2',
    //   guestEmail: 'test@gmail.value',
    //   checkinDate: new Date('02/04/2023'),
    //   checkoutDate: '',
    //   bookingStatus: '',
    //   bookingAmount: '',
    //   bookingDate: '',
    //   mobileNumber: '',
    //   guestName: '',
    //   address: {
    //     addressLine1: '',
    //     addressLine2: '',
    //     city: '',
    //     state: '',
    //     country: '',
    //     zipCode: '',
    //   },
    //   guests: [
    //     {
    //       guestName: '',
    //       age: '',
    //     },
    //   ],
    //   tnc: false,
    // });

    // // can skip values  values for all the controls
    // this.bookingForm.patchValue({
    //   roomId: '2',
    //   guestEmail: 'test@gmail.value',
    //   checkinDate: new Date('02/04/2023'),
    //   checkoutDate: '',
    //   bookingStatus: '',
    //   bookingAmount: '',
    //   bookingDate: '',
    //   mobileNumber: '',
    //   guestName: '',
    //   address: {
    //     addressLine1: '',
    //     addressLine2: '',
    //     city: '',
    //     state: '',
    //     country: '',
    //     zipCode: '',
    //   },
    //   // default will apply not empty
    //   guests: [
    //     {
    //       guestName: '',
    //       age: '',
    //     },
    //     {
    //       guestName: '',
    //       age: '',
    //     },
    //   ],
    //   tnc: false,
    // });

    // // console.log(this.bookingForm.value);
    // console.log(this.bookingForm.getRawValue());
    // // reset all values to null
    // // this.bookingForm.reset();
    this.bookingForm.reset({
      // provide default values not the validator controls
      // all will back to normal as first and earlier provided validators will also apply
      // roomId: '2',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      // back to normal (one guest form group will included)
      guests: [],
      tnc: false,
    });
  }

  addGuest() {
    // to push a new control
    this.guests.push(
      this.fb.group({
        guestName: [''],
        age: new FormControl(''),
      })
    );
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }

  // onDateChange(event: any) {
  //   console.log(event);
  // }
}

function mergeMap(): import('rxjs').OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}
// export class Booking {
//   roomId: string;
//   guetsEmail: string;
//   checkinDate: Date;
//   checkoutDate: Date;
//   bookingStatus: string;
//   bookingAmount: string;
//   bookingDate: Date;
//   mobileNumer: string;
//   guestName: string;
//   guestAddress: string;
//   guestCity: string;
//   guestState: string;
//   guestCountry: string;
//   guestZipCode: string;
//   guestCount: number;
//   guestList: [];
// }
