import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { LinkIconComponent } from '../link-icon/link-icon.component';
import { IconName } from '../icon/icon.component';
import { ROUTES } from 'src/app/app-routing.module';

@Component({
  standalone: true,
  selector: 'pom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,

  imports: [CommonModule, LinkIconComponent]
})
export class HeaderComponent {
  navigationList = [
    { iconName: IconName.list, to: ROUTES.tasks, title: "To global list" },
    { iconName: IconName.statistics, to: '', title: "To statistics" },
    { iconName: IconName.settings, to: ROUTES.settings, title: "To settings" },
  ];
}
