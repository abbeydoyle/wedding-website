import { Component, EventEmitter, Input, input, Output } from '@angular/core'
import { RsvpCheckComponent } from '../rsvp-check/rsvp-check.component'
import { SendRsvpComponent } from '../send-rsvp/send-rsvp.component'

@Component({
  selector: 'app-guests-page',
  standalone: true,
  imports: [RsvpCheckComponent, SendRsvpComponent],
  templateUrl: './guests-page.component.html',
  styleUrl: './guests-page.component.scss',
})
export class GuestsPageComponent {
  @Input() rsvpStatus!: string // Receive rsvpStatus from GuestsComponent
  @Output() checkRsvp = new EventEmitter<{
    firstName: string
    lastName: string
  }>()

  onCheckRsvp(event: { firstName: string; lastName: string }): void {
    this.checkRsvp.emit(event) // Emit event to GuestsComponent
  }
}
