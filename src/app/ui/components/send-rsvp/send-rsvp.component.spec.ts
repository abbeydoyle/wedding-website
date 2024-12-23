import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SendRsvpComponent } from './send-rsvp.component'

describe('SendRsvpComponent', () => {
  let component: SendRsvpComponent
  let fixture: ComponentFixture<SendRsvpComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendRsvpComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SendRsvpComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
