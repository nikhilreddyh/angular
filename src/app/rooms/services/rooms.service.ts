import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import {} from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root', // or any
})
export class RoomsService {
  roomsList: RoomList[] = [
    {
      roomNumber: '1',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: '',
      checkinTime: new Date('11-Nov-2022'),
      checkoutTime: new Date('12-Nov-2022'),
      rating: 4.5,
    },
    {
      roomNumber: '2',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: '',
      checkinTime: new Date('16-Nov-2022'),
      checkoutTime: new Date('18-Nov-2022'),
      rating: 3.4,
    },
    {
      roomNumber: '3',
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price: 1500,
      photos: '',
      checkinTime: new Date('16-Nov-2022'),
      checkoutTime: new Date('18-Nov-2022'),
      rating: 2.6,
    },
  ];

  // shareReplay will replay the last record received
  // getRoom is a property and $ indicates its a stream

  // headers = new HttpHeaders({ token: '12345adadsd' });
  // getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(shareReplay(1));

  // first Inject the service
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(config.apiEndPoint);
    console.log('Rooms Service Initialised');
  }

  getRooms() {
    const headers = new HttpHeaders({ token: '12345adadsd' });
    // return this.http.get<RoomList[]>('/api/rooms', { headers: headers });
  }

  addRoom(room: RoomList) {
    // return this.http.post<RoomList[]>('/api/rooms', room);
    this.roomsList = [...this.roomsList, room];
  }

  updateRoom(room: RoomList) {
    // return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    // return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    // const request = new HttpRequest(
    //   'GET',
    //   `https://jsonplaceholder.typicode.com/photos`,
    //   { reportProgress: true }
    // );
    // returns data with additional information about the request
    // return this.http.request(request);
    // retruns only the data after subscribing
    // return this.http.get('https://jsonplaceholder.typicode.com/photos');
    // request method defination : Sends an HttpRequest and returns a stream of HttpEvents.
    // @return — An Observable of the response, with the response body as a stream of HttpEvents.
  }
}

// // pull based architecture
//  getDate -> addData -> getData

// // push based architecture (in RxJs)
// getData -> continuous stream of data -> addData
