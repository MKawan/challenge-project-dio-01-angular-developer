import { Component, Input, NgModule, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink ],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

  @Input()
  photoCard: string = "";
  @Input()
  titleCard: string = "";
  @Input()
  decriptionCard: string = "";
  @Input()
  Id: string = "0";
  constructor(){}
}
