import { Component, Input } from '@angular/core';
import { IconComponent, IconName } from '../icon/icon.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'pom-link-icon',
  templateUrl: './link-icon.component.html',
  styleUrls: ['./link-icon.component.scss'],

  imports: [RouterModule, IconComponent]
})
export class LinkIconComponent {
  @Input() iconName!: IconName;
  @Input() to!: string;
  @Input() title!: string;
  
}
