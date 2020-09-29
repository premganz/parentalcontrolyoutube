import { Component, NgModule,  OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';


  
@Component({
selector: 'basic-table',
templateUrl: './basic-table.component.html',

})


export class BasicTableComponent {
 
   NAMES = [];
  URLS=[
    "https://www.youtube.com/Exsljuc_hvs","https://vimeo.com/197933516",
    "https://www.youtube.com/watch?v=o5cELP06Mik",
    "https://www.youtube.com/watch?v=W4Ou96H-cPc"
  ]
  // string1=this.embedService(this.URLS[0])
  string2=''
  func1: any = function getEmbedded(url){
      return this.embedService.embed(url);
   
  }
 
  func3: any= function loopOn2(){
   
       for (let i = 1; i < this.URLS.length; i++) {
    let newName = {
       id:i.toString(),
       last:this.func1(this.URLS[i])
    };
    console.log(this.URLS[i]); // 1, "string", false
   this.NAMES.push(newName);
  
}
    }
  
  
  elements: any = this.NAMES
  
  
  headElements = ['ID', 'First', 'Last', 'Handle'];
 constructor(
    private embedService: EmbedVideoService    
  
  ){}
  
ngOnInit(){
  this.func3();
}

}

 