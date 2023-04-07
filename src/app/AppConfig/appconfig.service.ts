import { InjectionToken } from '@angular/core';
import { AppConfig } from './appconfig.interface';
import {} from '../../environments/environment';
import { environment } from 'src/environments/environment.prod';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
  apiEndPoint: environment.apiEndpoint,
};
