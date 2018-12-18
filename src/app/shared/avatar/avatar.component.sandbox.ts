import { AvatarComponent } from '@shared/avatar/avatar.component';
import { sandboxOf } from 'angular-playground';

const withPhotoUrl = { name: 'Angular', photoUrl: 'assets/img/iconfinder_angular.png' };
const withoutPhotoUrl = { name: 'Rails' };

export default sandboxOf(AvatarComponent)
  .add('Default', {
    template: `<app-avatar></app-avatar>`
  })
  .add('With Photo Url', {
    template: `<app-avatar [item]="item" ></app-avatar>`,
    context: {
      item: withPhotoUrl
    }
  }).add('Without Photo Url', {
    template: `<app-avatar [item]="item" ></app-avatar>`,
    context: {
      item: withoutPhotoUrl
    }
  });
