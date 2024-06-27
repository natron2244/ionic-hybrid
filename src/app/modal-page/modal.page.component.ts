import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StandaloneComponent } from '../standalone/standalone.component';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-modal.page',
  templateUrl: './modal.page.component.html',
  styleUrls: ['./modal.page.component.scss'],
  imports: [StandaloneComponent, IonContent],
})
export class ModalPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
