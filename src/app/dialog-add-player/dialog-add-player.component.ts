import { Component } from '@angular/core';
import { MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogActions } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogContent, MatFormFieldModule, MatDialogActions, MatInputModule, FormsModule, MatButtonModule, MatDividerModule, MatIconModule, MatDialogClose],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})

export class DialogAddPlayerComponent {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {
  }
  
name:string = '';
}

