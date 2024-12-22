import { Component } from '@angular/core';
import { GuestListComponent, Guests, mockGuests } from '../../../ui';
import { GuestsPageComponent } from '../../../ui/components/guests-page/guests-page.component';

@Component({
  selector: 'app-guests',
  standalone: true,
  imports: [GuestListComponent, GuestsPageComponent],
  templateUrl: './guests.component.html',
  styleUrl: './guests.component.scss'
})
export class GuestsComponent {
 guests: Guests[] = mockGuests
}
