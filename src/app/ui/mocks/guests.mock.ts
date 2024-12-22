import { Guests, RSVPStatus } from '../models/guest.model'

export const mockGuests: Guests[] = [
  { name: 'John Doe', rsvpStatus: RSVPStatus.accepted },
  { name: 'Jane Smith', rsvpStatus: RSVPStatus.denied },
  { name: 'Alice Johnson', rsvpStatus: RSVPStatus.pending },
]
