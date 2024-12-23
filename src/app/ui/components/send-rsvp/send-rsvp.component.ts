import { Component } from '@angular/core'
import { DeviceDetectorService } from 'ngx-device-detector'

@Component({
  selector: 'app-send-rsvp',
  standalone: true,
  imports: [],
  templateUrl: './send-rsvp.component.html',
  styleUrl: './send-rsvp.component.scss',
})
export class SendRsvpComponent {
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
