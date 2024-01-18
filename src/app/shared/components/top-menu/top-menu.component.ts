import { Component } from '@angular/core';
import packageInfo from '../../../../../package.json';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass']
})
export class TopMenuComponent {
  version = packageInfo.version;
}
