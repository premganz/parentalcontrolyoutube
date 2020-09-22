import { Component, NgModule,  OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
@Component({
selector: 'basic-table',
templateUrl: './basic-table.component.html',

})


export class BasicTableComponent {
 
  
  URLS=[
    "https://www.youtube.com/Exsljuc_hvs","https://vimeo.com/197933516",
    "https://youtu.be/ZvUBGN4KoP0",
    "https://www.youtube.com/watch?v=W4Ou96H-cPc"
  ]
  // string1=this.embedService(this.URLS[0])
  string2=''
  func1: any = function getEmbedded(url){
      return this.embedService.embed(url);
   
  }
  elements1:any= function getListFromUrls(){
  
  }
  elements: any = [
    {id: 1, first:'', last: this.func1(this.URLS[2]), handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
     ];

  headElements = ['ID', 'First', 'Last', 'Handle'];
 constructor(
    private embedService: EmbedVideoService
  ){}
}

 