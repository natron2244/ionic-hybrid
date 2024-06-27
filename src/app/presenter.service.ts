import { Injectable, inject } from '@angular/core';

// Notes For Ionic Team: If we use the modal import, then it will not preset the standalone component
// import { ModalController } from '@ionic/angular';

// Notes For Ionic Team: If we use the standalone import, we get the following error: NullInjectorError: NullInjectorError: No provider for ModalController!
import { ModalController } from '@ionic/angular/standalone';
// Notes For Ionic Team: To solve this error see app.module

import { ModalPageComponent } from './modal-page/modal.page.component';

@Injectable()
export class PresenterService {
  private modalController = inject(ModalController);

  constructor() {}

  async presentModal() {
    const controller = await this.modalController.create({
      component: ModalPageComponent,
    });
    controller.present();
  }
}
