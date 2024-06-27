import { Component, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OldModalPageComponent } from '../old-modal-page/old-modal-page.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  private modalController = inject(ModalController);

  constructor() {}

  async presentModal() {
    const controller = await this.modalController.create({
      component: OldModalPageComponent,
    });
    controller.present();
  }
}
