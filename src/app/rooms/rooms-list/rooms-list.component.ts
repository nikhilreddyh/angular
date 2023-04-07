import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rooms: RoomList[] | null = [];

  @Input() title: string = '';

  @Input() price: number | null = 0;
  @Output()
  selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList): void {
    this.selectedRoom.emit(room);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      // this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  // defination: A callback method that performs custom clean-up, invoked immediately before a directive, pipe, or service instance is destroyed.
  ngOnDestroy(): void {
    console.log('on destroy is called');
  }
}

// ngOnInit
// A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.

// ngOnChanges
// A callback method that is invoked immediately after the default change detector has checked data-bound properties if at least one has changed, and before the view and content children are checked.
// @param changes — The changed properties.
