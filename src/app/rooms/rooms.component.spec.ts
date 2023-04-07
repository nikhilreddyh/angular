import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { ConfigService } from '../services/config.service';
import { RoomsService } from './services/rooms.service';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';
import { RouteConfigToken } from '../services/routeConfig.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule],
      declarations: [RoomsComponent],
      providers: [
        ConfigService,
        RoomsService,
        ActivatedRoute,
        {
          provide: APP_SERVICE_CONFIG,
          // provide any value you want
          useValue: { apiEndPoint: 'https://jsonplaceholder.typicode.com' },
        },
        {
          provide: RouteConfigToken,
          useValue: { title: 'rooms' },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
