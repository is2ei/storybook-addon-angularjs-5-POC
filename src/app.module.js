import angular from 'angular';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

export const AppModule = angular
  .module('app.module', [])
  .component('appComponent', AppComponent)
  .service('AppService', AppService)
  .name
;
