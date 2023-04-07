import { JsonPipe } from '@angular/common';
import { HttpEventType } from '@angular/common/http';
import {
  AfterViewInit,
  QueryList,
  SkipSelf,
  ViewChildren,
} from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import {
  Component,
  OnDestroy,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { ConfigService } from '../services/config.service';
import { Room, RoomList } from './rooms';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsService } from './services/rooms.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit, OnDestroy {
  // defination: A callback method that is invoked immediately after the default change detector has completed one change-check cycle for a component's view.
  // hc is an instance of HeaderComponent
  @ViewChild(HeaderComponent) hc!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  ngAfterViewInit(): void {
    // this.hc.title = 'Rooms View';
    console.log(this.headerChildrenComponent);

    this.headerChildrenComponent.forEach((ele) => (ele.title = 'Rooms View'));
  }

  hotelName = 'hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  // ! indicates optional
  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomsList: RoomList[] = [];

  title = 'Room List';

  renderRoom(selectedRoom: RoomList): void {
    this.selectedRoom = selectedRoom;
    console.log(selectedRoom);
  }

  priceFilter = new FormControl(0);

  constructor(
    @SkipSelf() private roomsService: RoomsService,
    private configService: ConfigService
  ) {
    this.roomsList = roomsService.roomsList;
  }

  addRoom(): void {
    // const newRoom: RoomList = {
    //   roomNumber: '4',
    //   roomType: 'Delux Suite',
    //   amenities: 'Air Conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
    //   price: 1700,
    //   photos: '',
    //   checkinTime: new Date('16-Nov-2022'),
    //   checkoutTime: new Date('18-Nov-2022'),
    //   rating: 4.2,
    // };

    this.roomsList = this.roomsService.roomsList;

    // const newRoom = this.roomAdd.room;
    // this.roomsList.push(newRoom);
    // this.roomsList = [...this.roomsList, newRoom];

    // this.roomsService.addRoom(newRoom).subscribe((data) => {
    //   this.roomsList = data;
    // });
  }

  editRoom() {
    const newRoom: RoomList = {
      roomNumber: '3',
      roomType: 'Delux Suite',
      amenities: 'Air Conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price: 1700,
      photos: '',
      checkinTime: new Date('16-Nov-2022'),
      checkoutTime: new Date('18-Nov-2022'),
      rating: 4.2,
    };

    // this.roomsService
    //   .updateRoom(newRoom)
    //   .subscribe((data) => console.log(data));
  }

  deleteRoom() {
    // this.roomsService
    //   .deleteRoom('3')
    //   .subscribe((data) => (this.roomsList = data));
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List📃';
  }

  // totalBites = 0;
  // subscription!: Subscription;

  // error$ = new Subject<string>();
  // // Subject defination: A Subject is a special type of Observable that allows values to be multicasted to many Observers. Subjects are like EventEmitters.
  // // Every Subject is an Observable and an Observer. You can subscribe to a Subject, and you can call next to feed values as well as error and complete.

  // // subscribing to the error subject
  // getError$ = this.error$.asObservable();

  // rooms$ = this.roomsService.getRooms$.pipe(
  //   catchError((err) => {
  //     // console.log(err);
  //     this.error$.next(err.message);
  //     return of([]);
  //   })
  // );

  // roomsCount$ = this.roomsService.getRooms$.pipe(map((rooms) => rooms.length));

  ngOnInit(): void {
    // this.subscription = this.roomsService.getRooms$.subscribe((rooms) => {
    //   this.roomsList = rooms;
    // });
    // this.stream.subscribe((data) => console.log(data));
    // // once we subscribe we get 3 types of data
    // this.stream.subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log('completed'),
    //   error: (err) => console.log(err),
    // });
    // this.roomsService.getPhotos().subscribe((event) => {
    //   switch (event.type) {
    //     case HttpEventType.Sent: {
    //       console.log('Request has been made!');
    //       break;
    //     }
    //     case HttpEventType.ResponseHeader: {
    //       console.log('Request Success');
    //       break;
    //     }
    //     case HttpEventType.DownloadProgress: {
    //       this.totalBites += event.loaded;
    //       // we can access to 2 properties total (null while data is loading), loaded
    //       console.log(`${this.totalBites} records loaded`);
    //       break;
    //     }
    //     case HttpEventType.Response: {
    //       console.log('Response received');
    //       console.log(event.body);
    //       break;
    //     }
    //   }
    // });
  }

  ngOnDestroy() {
    // if there is any active subscription
    // whenever this component is destroyed/ removed from DOM go and destroy subscription also
    // if (this.subscription) {
    //   this.subscription.unsubscribe();
    // }
  }

  // .next() emitts new data
  // @param value — The next value.

  // this returns new stream every time
  // stream = new Observable((observe) => {
  //   observe.next('user1');
  //   // we can call many times
  //   observe.next('user2');
  //   observe.next('user3');
  //   //  Notifies the Observer that the Observable has finished sending push-based notifications.
  //   observe.complete();
  //   // we can also handle errors
  //   // observe.error('error');
  // });
}
