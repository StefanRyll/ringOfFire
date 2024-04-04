import { style } from '@angular/animations';
import { Component, Input } from '@angular/core';
import {MatCardModule, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule, MatCardTitle],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent {
  cardAction = [
    { title: 'Waterfall', description: 'Das Ass steht für den Wasserfall. Alle Spieler setzen zum trinken an. Im Uhrzeigersinn darf erst dann mit dem Trinken aufgehört werden, wenn der rechte Sitznachbar davor seinen Wasserfall beendet hat. Der Spieler, der das Ass zieht darf zu erst aufhören zu trinken (wann er will).' },
    { title: '2 is for you', description: 'Du darfst eine Person bestimmen, die einen Schluck aus ihrem Getränk nimmt..' },
    { title: '3 is me', description: 'Du musst einen Schluck trinken.' },
    { title: '4 is floor', description: 'Berühre mit deiner Hand den Boden. Der Mitspieler, der zuletzt den Boden berührt, muss einen Schluck trinken.' },
    { title: '5 is thumbmaster', description: 'Berühre mit deinem Daumen die Tischplatte. Der Mitspieler der zuletzt den Tisch berührt, muss einen Schluck trinken. ' },
    { title: '6 for Girls', description: 'Die Damen der Schöpfung müssen einen Schluck trinken.' },
    { title: 'seven in Heaven', description: 'Zeige mit deinem Zeigefinger gen Himmel. Wer zuletzt zum Himmel zeigt, muss einen Schluck trinken.' },
    { title: '8 for Mate', description: 'Bestimme einen Mitspieler, der von nun an jedes Mal mit dir einen Schluck trinken muss, wenn du dazu aufgefordert wirst.' },
    { title: '9 is rhyme', description: 'Such dir ein Wort aus. Im Uhrzeigersinn müssen die Mitspieler einen Reim darauf finden. Wer ein Wort wiederholt oder keinen neuen Reim mehr nennen kann, muss einen Schluck trinken.' },
    { title: '10 is men', description: 'Die Männer dürfen anstoßen und einen Schluck trinken.' },
    { title: 'Bube', description: 'Du darfst dir eine neue Spielregel ausdenken, die bis zum Ende des Spiels gilt. Die Regel darf vom keinem anderem außer Kraft gesetzt werden.' },
    { title: 'Never have i ever...', description: 'Der Spieler darf eine Runde "Never have I ever..." ausrufen. Die Verlierer trinken.' },
    { title: 'King', description: 'Wird ein König gezogen, darf der Spieler ein Getränk seiner Wahl in den Kingscup gießen. Wird der vierte König gezogen, so muss der Spieler unverzüglich den Kingscup in der Mitte des Spiels leeren.' },
  ];

  title = '';
  description = '';
  @Input() card:string | undefined = '';

  constructor() {
  }
  
  // ngOnChanges wird aufgerufen, 
  // wenn eine übergeordnete Komponente die Werte der Eingabe-Eigenschaften (Input Properties) einer untergeordneten Komponente ändert oder initialisiert.
  ngOnChanges(): void {
    if(this.card) {
    let cardNumber:number = 1;
    cardNumber = +this.card.split('_')[1];
    this.title = this.cardAction[cardNumber -1].title;
    this.description = this.cardAction[cardNumber -1].description;
  }
}

}
