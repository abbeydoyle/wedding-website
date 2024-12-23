import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-countdown-component',
  standalone: true,
  imports: [],
  templateUrl: './countdown-component.component.html',
  styleUrl: './countdown-component.component.scss',
})
export class CountdownComponentComponent {
  @Input() timeLeft!: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
}
