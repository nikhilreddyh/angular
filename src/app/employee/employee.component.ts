import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService],
})
export class EmployeeComponent {
  empName: string = 'John';

  // Injecting Service
  constructor(@Self() private roomsService: RoomsService) {}
}
