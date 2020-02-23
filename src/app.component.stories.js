import { forModule } from "storybook-addon-angularjs";

export default { title: 'Button' };

export const defaultMessage =
  forModule('app.module')
    .createElement(
      compile => {
        return compile`
          <app-component></app-component>
        `
      }
    )
;

export const overriddenMessage =
  forModule('app.module')
    .createElement(
      compile => {
        return compile`
          <app-component></app-component>
        `
      },
      (AppService) => {
        AppService.message = 'Good Bye';
      }
    )
;
