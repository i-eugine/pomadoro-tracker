import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';

interface Settings {
  workTime: number;
  workIterations: number;
  shortBreak: number;
  longBreak: number;
}

@Component({
  selector: 'pom-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settings!: Settings;

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.settingsService.get().subscribe((settings) => {
      this.settings = settings;
    })
  }
}
