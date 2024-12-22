import { Component } from '@angular/core';
import { GuestsComponent } from '../guests/guests.component';
import { GameComponent } from '../game/game.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [GuestsComponent, GameComponent, HeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
