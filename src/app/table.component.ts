import { Component, NgModule,  OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
@Component({
selector: 'basic-table',
templateUrl: './basic-table.component.html',

})
 

export class BasicTableComponent {
 
  
  URLS=[
    "https://vimeo.com/197933516"
  ]
  elements: any = [
    {id: 1, first: this.embedService(this.URLS[0]), last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];
 constructor(
    private embedService: EmbedVideoService
  ){}
}

 function getEmbedded(url){
      return this.embedService.embed(url);
   
 }