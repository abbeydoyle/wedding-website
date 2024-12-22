import { Component, Input } from '@angular/core';
import { Guests } from '../../models/guest.model';
import { CommonModule } from '@angular/common';
import { mockGuests } from '../../mocks/guests.mock';

@Component({
  selector: 'app-guest-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guest-list.component.html',
  styleUrl: './guest-list.component.scss'
})
export class GuestListComponent {
  @Input() guests!: Guests[];
}
