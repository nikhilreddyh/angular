import { Component, Input } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = '';

  // @Input() title: string = '';

  constructor(private configService: ConfigService) {}
}
