import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings:any = Array();

  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.settingsService.getSettings()
      .subscribe( data => this.settings = data );
  }

  saveSettings()
  {
    this.settingsService.saveSettings(this.settings)
      .subscribe(
        data => {
          alert(data['message']);
        }
      );
  }

}
