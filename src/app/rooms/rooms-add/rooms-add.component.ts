import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss'],
})
export class RoomsAddComponent {
  room: RoomList = {
    // default values of RoomList interface
    roomNumber: '',
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  };

  successMessage: string = '';

  constructor(private roomService: RoomsService) {}

  AddRoom(roomsForm: NgForm) {
    this.successMessage = 'Room Added Successfully';

    // if we pass direct object then values will be null because later we resetted it
    this.roomService.addRoom({ ...this.room });
    console.log(this.room);

    roomsForm.reset();

    // roomsForm.resetForm({
    //   // we can provide default data
    //   roomType: 'Suite',
    //   amenities: '',
    //   checkinTime: new Date(),
    //   checkoutTime: new Date(),
    //   photos: '',
    //   price: 0,
    //   rating: 0,
    // });
  }
}
