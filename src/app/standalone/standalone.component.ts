import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent],
})
export class StandaloneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
