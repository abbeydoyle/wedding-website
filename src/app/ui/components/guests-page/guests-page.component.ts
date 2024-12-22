import { Component } from '@angular/core';

@Component({
  selector: 'app-guests-page',
  standalone: true,
  imports: [],
  templateUrl: './guests-page.component.html',
  styleUrl: './guests-page.component.scss'
})
export class GuestsPageComponent {

  constructor( private deviceService: DeviceDetectorService) {}
  
}
