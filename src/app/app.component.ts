import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
  Inject,
} from '@angular/core';
import { LoggerService } from './rooms/logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from '../app/localstorage.token';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('name', { static: true }) name!: ElementRef;

  ngAfterViewInit(): void {
    // // createComponent: Instantiates a single component and inserts its host view into this container.
    // const componentRef = this.vcr.createComponent(RoomsComponent);
    // console.log(componentRef);
    // componentRef.instance.numberOfRooms = 100;
  }
  title = 'hotelapp';

  // @ViewChild('user', { read: ViewContainerRef })
  // vcr!: ViewContainerRef;

  // ViewContainerRef helps to dynamically load a component

  constructor(
    @Optional() private loggerService: LoggerService,
    // type for localstorage is Storage or we can use any
    @Inject(localStorageToken) private localStorage: Storage,
    private configService: ConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // console.log(this.name);
    // this.name.nativeElement.innerText = 'Hilton Hotels';
    // this.loggerService?.log('hey');
    // this.localStorage.setItem('name', 'Hilton Hotel');

    // this.router.events.subscribe((event) => console.log(event));

    // pipe - rxgs
    // this.router.events is observables
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => console.log('show loader'));

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => console.log('end loader'));
  }
}
