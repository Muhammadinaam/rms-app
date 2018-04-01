import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SettingsService {

  constructor(
    private config: ConfigService,
    private http: HttpClient
  ) { }

  getSettings()
  {
    return this.http.get(this.config.base_url + '/api/show-settings');
  }

  getSettingBySlug(slug)
  {
    return this.http.get(this.config.base_url + '/api/get-setting-by-slug?slug=' + slug);
  }

  saveSettings(settings)
  {
    let fd = new FormData();

    fd.append('settings', JSON.stringify(settings));

    return this.http.post(this.config.base_url + '/api/save-settings', fd);
  }

}
