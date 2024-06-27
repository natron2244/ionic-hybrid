import { Component, Input, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPageComponent } from '../modal-page/modal.page.component';
import { PresenterService } from '../presenter.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  @Input() name?: string;

  private presenterService = inject(PresenterService);

  async launchModal() {
    this.presenterService.presentModal();
  }
}
