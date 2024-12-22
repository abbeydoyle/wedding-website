import { Component, input } from '@angular/core'
import { DeviceDetectorService } from 'ngx-device-detector'

@Component({
  selector: 'app-guests-page',
  standalone: true,
  imports: [GuestsPageComponent],
  templateUrl: './guests-page.component.html',
  styleUrl: './guests-page.component.scss',
})
export class GuestsPageComponent {
  isMobile: boolean

  constructor(private deviceService: DeviceDetectorService) {
    this.isMobile = this.deviceService.isMobile()
  }

  handleAction() {
    if (this.isMobile) {
      // Mobile: Send SMS
      window.location.href = 'sms:+1234567890?body=Hi, I have a question!'
    } else {
      // Desktop: Send Email
      window.location.href =
        'mailto:example@example.com?subject=Question&body=Hi, I have a question!'
    }
  }
}
