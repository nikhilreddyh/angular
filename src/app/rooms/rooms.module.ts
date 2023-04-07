import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { RouteConfigToken } from '../services/routeConfig.service';
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
    FilterPipe,
  ],

  imports: [
    RouterModule,
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule,
  ],

  providers: [
    {
      provide: RouteConfigToken,
      useValue: { title: 'Room' },
    },
  ],
})
export class RoomsModule {}
