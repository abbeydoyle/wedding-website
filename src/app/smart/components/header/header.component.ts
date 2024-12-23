import { Component, Input } from '@angular/core'
import { NavbarComponent } from '../navbar/navbar.component'
import { staticHeader } from '../../../ui/mocks/header.mock'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // navbar: any = staticHeader.navbar
}
