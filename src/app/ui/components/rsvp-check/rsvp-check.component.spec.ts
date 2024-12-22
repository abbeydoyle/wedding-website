import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RsvpCheckComponent } from './rsvp-check.component'

describe('RsvpCheckComponent', () => {
  let component: RsvpCheckComponent
  let fixture: ComponentFixture<RsvpCheckComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsvpCheckComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(RsvpCheckComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
