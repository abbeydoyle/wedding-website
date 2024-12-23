import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core'
import { interval } from 'rxjs'
import { CountdownComponentComponent } from '../../../ui/components/countdown-component/countdown-component.component'
import { isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-countdown-clock',
  standalone: true,
  imports: [CountdownComponentComponent],
  templateUrl: './countdown-clock.component.html',
  styleUrls: ['./countdown-clock.component.scss'],
})
export class CountdownClockComponent implements OnInit {
  timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

  private targetDate = new Date('2026-07-04T00:00:00') // Replace with your target date
  private browserOnly: boolean

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.browserOnly = isPlatformBrowser(this.platformId)
  }

  ngOnInit(): void {
    if (this.browserOnly) {
      interval(1000).subscribe(() => this.updateCountdown())
    }
  }

  private updateCountdown(): void {
    const now = new Date().getTime()

    const difference = this.targetDate.getTime() - now

    if (difference > 0) {
      this.timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    } else {
      this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
  }
}
