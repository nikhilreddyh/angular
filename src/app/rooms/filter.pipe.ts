import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from './rooms';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    rooms: RoomList[] | null,
    price: number | null
  ): RoomList[] | undefined {
    return rooms?.filter((rooms) => rooms.price > (price ?? 0));
  }
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
}
