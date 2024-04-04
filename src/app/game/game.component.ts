import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../modules/game';
import { PlayerComponent } from '../player/player.component';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { GameInfoComponent } from '../game-info/game-info.component';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, DialogAddPlayerComponent, GameInfoComponent, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard:string | undefined = '';
  game: Game;

  constructor(public dialog: MatDialog) {
    this.game = new Game();
  }
  

  takeCard() {
    if(!this.pickCardAnimation) {
    this.currentCard = this.game.stack.pop();
    this.pickCardAnimation = true;
    
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length; // modulu
    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
  }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if(name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }
}