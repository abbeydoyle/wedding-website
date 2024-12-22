import { CommonModule } from '@angular/common'
import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  private isBrowser = typeof window !== 'undefined' // Check if window is available

  characters = {
    user: { x: 20, y: 550 }, // Red dot (You)
    partner: { x: 120, y: 550 }, // Blue dot (Partner)
    cat: { x: 20, y: 480 }, // Orange dot (Cat) in front of you
    dog1: { x: 90, y: 480 }, // White dot (Dog1) slightly left
    dog2: { x: 160, y: 480 }, // Tan dot (Dog2) slightly right
  }

  signs = [
    { id: 1, x: 300, y: 150, fact: 'We met in college!' },
    { id: 2, x: 500, y: 250, fact: 'Our favorite vacation was in Hawaii.' },
    { id: 3, x: 200, y: 400, fact: 'Our first pet was a rescue cat.' },
  ]

  activeSign: number | null = null

  // Define relative offsets for each character
  OFFSETS = {
    partner: { x: 100, y: 0 }, // Partner is 100px to the right of the user
    cat: { x: 0, y: -70 }, // Cat is 70px above the user
    dog1: { x: 70, y: -70 }, // Dog1 is 70px right and 70px above the user
    dog2: { x: 140, y: -70 }, // Dog2 is 140px right and 70px above the user
  }

  ngOnInit() {
    if (this.isBrowser) {
      window.addEventListener('keydown', this.handleKeydown.bind(this)) // Add keydown listener
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      window.removeEventListener('keydown', this.handleKeydown.bind(this)) // Remove keydown listener
    }
  }

  handleKeydown(event: KeyboardEvent) {
    if (!this.isBrowser) return

    const speed = 10
    const gameWidth = 800 // Width of the game area
    const gameHeight = 600 // Height of the game area

    // Restrict movement to arrow keys
    const allowedKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    if (!allowedKeys.includes(event.key)) {
      return // Ignore all other keys
    }

    // Move the red dot (user) within boundaries
    switch (event.key) {
      case 'ArrowUp':
        if (this.characters.user.y > 50) this.characters.user.y -= speed
        break
      case 'ArrowDown':
        if (this.characters.user.y < gameHeight - 50)
          this.characters.user.y += speed
        break
      case 'ArrowLeft':
        if (this.characters.user.x > 50) this.characters.user.x -= speed
        break
      case 'ArrowRight':
        if (this.characters.user.x < gameWidth - 50)
          this.characters.user.x += speed
        break
    }

    // Dynamically calculate partner's position relative to user
    const partnerX = this.characters.user.x + this.OFFSETS.partner.x
    const partnerY = this.characters.user.y + this.OFFSETS.partner.y

    // Adjust positions of other characters
    this.characters.partner.x = partnerX
    this.characters.partner.y = partnerY

    this.characters.cat.x = this.characters.user.x + this.OFFSETS.cat.x
    this.characters.cat.y = this.characters.user.y + this.OFFSETS.cat.y

    this.characters.dog1.x = this.characters.user.x + this.OFFSETS.dog1.x
    this.characters.dog1.y = this.characters.user.y + this.OFFSETS.dog1.y

    this.characters.dog2.x = this.characters.user.x + this.OFFSETS.dog2.x
    this.characters.dog2.y = this.characters.user.y + this.OFFSETS.dog2.y

    // this.updateCharacterScales(); // Update scaling for depth perspective
    this.updateZIndices() // Update z-index for layering
    this.checkCollision() // Check for collision with signs
  }

  // updateCharacterScales() {
  //   const maxDepth = 600; // Maximum depth of the game area
  //   const minScale = 0.6; // Minimum scale for furthest characters
  //   const maxScale = 1.0; // Full scale for nearest characters

  //   for (const key of Object.keys(this.characters) as Array<keyof typeof this.characters>) {
  //     const character = this.characters[key];

  //     // Reverse the depth: closer characters (higher `y`) have larger scales
  //     const depth = 1 - character.y / maxDepth; // Normalize and invert y-position
  //     const scaleFactor = minScale + (maxScale - minScale) * depth; // Interpolate scale

  //     const element = document.getElementById(key);
  //     if (element) {
  //       element.style.setProperty('--scale-factor', scaleFactor.toString());
  //     }
  //   }
  // }

  updateZIndices() {
    for (const key of Object.keys(this.characters) as Array<
      keyof typeof this.characters
    >) {
      const character = this.characters[key]
      const element = document.getElementById(key)
      if (element) {
        element.style.setProperty('--y-position', character.y.toString())
      }
    }
  }

  checkCollision() {
    this.activeSign = null
    for (let sign of this.signs) {
      const distance = Math.hypot(
        this.characters.user.x - sign.x,
        this.characters.user.y - sign.y,
      )
      if (distance < 50) {
        this.activeSign = sign.id
        break
      }
    }
  }
}
