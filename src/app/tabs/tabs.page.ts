import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { square, ellipse, triangle } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor() {
    addIcons({
      square,
      ellipse,
      triangle,
    });
  }
}
