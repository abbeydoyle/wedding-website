import { Component, Input } from '@angular/core'
import { staticHeader } from '../../mocks/header.mock'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() navbar!: any
}
