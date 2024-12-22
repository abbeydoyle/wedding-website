import { HttpClientModule } from '@angular/common/http'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-rsvp-check',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './rsvp-check.component.html',
  styleUrls: ['./rsvp-check.component.scss'],
})
export class RsvpCheckComponent {
  @Input() rsvpStatus: string = '' // Input for the RSVP status message
  @Output() checkRsvp = new EventEmitter<{
    firstName: string
    lastName: string
  }>() // Output event to emit names

  firstName: string = '' // Two-way binding for first name
  lastName: string = '' // Two-way binding for last name

  onSubmit() {
    // Emit the entered first and last names to the parent component
    this.checkRsvp.emit({ firstName: this.firstName, lastName: this.lastName })
  }
  
}
