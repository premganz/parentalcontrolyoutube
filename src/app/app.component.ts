import { Component } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Parental Control your Youtube for kids';

  yt_iframe_html: any;
  vimeo_iframe_html: any;
  dm_iframe_html: any;
  
  vimeoUrl = "https://vimeo.com/197933516";
  youtubeUrl = "https://www.youtube.com/watch?v=Exsljuc_hvs";
  dailymotionUrl = "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport";

  constructor(
    private embedService: EmbedVideoService
  ) {
    this.yt_iframe_html = this.embedService.embed(this.youtubeUrl);
    this.vimeo_iframe_html = this.embedService.embed(this.vimeoUrl);
    this.dm_iframe_html = this.embedService.embed(this.dailymotionUrl);
  }
}
