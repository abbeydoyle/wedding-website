import { Component, Input } from '@angular/core'
import { staticHeader } from '../../../ui/mocks/header.mock'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navbar: any = staticHeader.navbar
}
