import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'pom-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imageScr!: string;
}
