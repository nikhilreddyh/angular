import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { RoomsComponent } from '../rooms.component';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent implements OnInit {
  id!: number;

  id$ = this.router.paramMap.pipe(map((data) => data.get('id')));

  // angular by default provide service for activated route
  constructor(private router: ActivatedRoute) {}
  ngOnInit() {
    // this.router.params.subscribe((data) => {
    //   this.id = data['id'];
    // });
    // this.id = this.router.snapshot.params['id'];
    // this.id$ = this.router.params.pipe(map((data) => data['id']));
    // this.router.paramMap.subscribe((data) => (this.id$ = data.get('id')));
    // this.id$ = this.router.params.pipe(map((data) => data['id']));
  }
}
