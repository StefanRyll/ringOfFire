import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../modules/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  pickCardAnimation = false;
  // currentCard:string | undefined = '';
  currentCard:any = '';
  game: Game;

  constructor() {
    this.game = new Game();
  }
  
  takeCard() {
    if(!this.pickCardAnimation) {
    this.currentCard = this.game.stack.pop();
    console.log(this.currentCard);
    this.pickCardAnimation = true;
    console.log('New Card ' + this.currentCard);
    console.log('Game is ' + this.game);
    
    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
  }
  }
}
