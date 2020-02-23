import { AppController } from './app.controller';

export const AppComponent = {
  template: `
    <h1>{{$ctrl.message}}</h1>
  `,
  controller: AppController
};
