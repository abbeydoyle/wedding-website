export interface Guests {
      'name': string,
      'rsvpStatus': RSVPStatus,
}

export enum RSVPStatus {
accepted = 'Accepted', 
denied = 'Denied', 
pending = 'Pending'
}
