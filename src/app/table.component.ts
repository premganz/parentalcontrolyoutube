import { Component, NgModule,  OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';


  
@Component({
selector: 'basic-table',
templateUrl: './basic-table.component.html',

})


export class BasicTableComponent {
 
   TOPICS = [];

  URLS=[
    "https://www.youtube.com/Exsljuc_hvs","https://vimeo.com/197933516",
    "https://www.youtube.com/watch?v=o5cELP06Mik",
    "https://www.youtube.com/watch?v=W4Ou96H-cPc"
  ]
  DATAMAP=[
    {
      topic:'songs1',
      urls: [
    "https://www.youtube.com/Exsljuc_hvs","https://vimeo.com/197933516",
    "https://www.youtube.com/watch?v=o5cELP06Mik",
    "https://www.youtube.com/watch?v=W4Ou96H-cPc"
  ]
    }
  ]
  // string1=this.embedService(this.URLS[0])
  string2=''
  func1: any = function getEmbedded(url){
      return this.embedService.embed(url);
    }
 
  func3: any = function loopOn2() {
    for (let i = 1; i < this.URLS.length; i++) {
      let newName = {
        id: i.toString(),
        last: this.func1(this.URLS[i])
      };
      console.log(this.URLS[i]); // 1, "string", false
      this.NAMES.push(newName);
    }
    }
  
  func4: any = function loopOn3() {
     console.log("entering");
     console.log(this.DATAMAP);
    for (let i = 0; i < this.DATAMAP.length; i++) {
      let topicSet = this.DATAMAP[i];
      let videoListItem = {
        topic: topicSet.topic,
        videos: [],
        last:this.func1(this.URLS[2])                
      }
      console.log(topicSet);
      for (let j = 0; j < topicSet.urls.length; j++) {
        videoListItem.videos.push(this.func1(topicSet.urls[j]))
        
      }
      console.log(videoListItem);
       this.TOPICS.push(videoListItem);
       
    }
  }
    
  elements: any = this.TOPICS
  // elements: any = this.TOPICS[0].videos
  
  headElements = ['ID', 'First', 'Last', 'Handle'];
 constructor(
    private embedService: EmbedVideoService    
  
  ){}
  
ngOnInit(){
  this.func4();
  console.log(this.TOPICS);
}

}

 