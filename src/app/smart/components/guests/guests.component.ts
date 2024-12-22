import { Component } from '@angular/core'
import { GuestListComponent, Guests, mockGuests } from '../../../ui'
import { GuestsPageComponent } from '../../../ui/components/guests-page/guests-page.component'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RsvpCheckComponent } from '../../../ui/components/rsvp-check/rsvp-check.component'

@Component({
  selector: 'app-guests',
  standalone: true,
  imports: [
    GuestListComponent,
    GuestsPageComponent,
    FormsModule,
    HttpClientModule,
    RsvpCheckComponent,
  ],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.scss',
})
export class GuestsComponent {
  guests: Guests[] = mockGuests
  rsvpStatus: string = '' // RSVP status message
  rsvpData: any[] = [] // List of guests

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch RSVP data from the JSON file
    this.http.get('/assets/guests.json').subscribe((data: any) => {
      this.rsvpData = data
    })
  }

  handleCheckRsvp(event: { firstName: string; lastName: string }) {
    const { firstName, lastName } = event

    // Check if the guest exists in the data
    const rsvp = this.rsvpData.find(
      (entry) =>
        entry.first_name.toLowerCase() === firstName.toLowerCase() &&
        entry.last_name.toLowerCase() === lastName.toLowerCase(),
    )

    // Update RSVP status message based on the result
    if (rsvp) {
      this.rsvpStatus = `Hello ${rsvp.first_name} ${rsvp.last_name}, your RSVP status is: ${rsvp.rsvp_status}`
    } else {
      this.rsvpStatus = `We could not find an RSVP under the name "${firstName} ${lastName}". Please check your entry or contact us.`
    }
  }
}
