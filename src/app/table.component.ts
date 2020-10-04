import { Component, NgModule,  OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';


  
@Component({
selector: 'basic-table',
templateUrl: './basic-table.component.html',

})


export class BasicTableComponent {
 
   TOPICS = [];


NAMES=[]
  URLS=[
    "https://www.youtube.com/Exsljuc_hvs","https://vimeo.com/197933516",
    "https://www.youtube.com/watch?v=o5cELP06Mik",
    "https://www.youtube.com/watch?v=W4Ou96H-cPc"
  ]
  DATAMAP=[
    {
      topic:'SONGS',
      urls: [
    "https://www.youtube.com/watch?v=eFjjO_lhf9c",
    "https://vimeo.com/197933516",
    "https://www.youtube.com/watch?v=o5cELP06Mik",
    "https://www.youtube.com/watch?v=W4Ou96H-cPc",
    "https://www.youtube.com/watch?v=qc2xDpwLryM",
    "https://www.youtube.com/watch?v=EqPtz5qN7HM",
    "https://www.youtube.com/watch?v=hCuMWrfXG4E",


  ]
    },
    {
      topic:'ADVENTURE',
      urls: [
    "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport",
    "https://www.youtube.com/watch?v=ZDbNe3mS0aw",
    "https://www.youtube.com/watch?v=o5cELP06Mikhttps://www.youtube.com/watch?v=iDlLCKnOB2M",
    

  ]
    },
     {
      topic:'OUR FRIENDS',
      urls: [
    "https://www.youtube.com/watch?v=3wmy6Wy9Wq0",
    "https://www.youtube.com/watch?v=AYsalrUJb_k",
    "https://www.youtube.com/watch?v=inwbIfUoLbA",
    "https://www.youtube.com/watch?v=VFwH7azUchE",
    "https://www.youtube.com/watch?v=f1oihPYSTW8"
    

  ]
    },
    {
      topic:'CARS and PLANES',
      urls: [
    "https://www.youtube.com/watch?v=OysoJgE90cQ",
    "https://www.youtube.com/watch?v=pl6L-tXd8yo",
    "https://www.youtube.com/watch?v=kfB0r_Ig7VU",
    "https://www.youtube.com/watch?v=zt_ttxwheSc",
    "https://www.youtube.com/watch?v=7g0xL88ebXs"
    

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
  // elements: any = this.NAMES
  
  headElements = ['TOPIC', 'VIDEOS'];
 constructor(
    private embedService: EmbedVideoService    
  
  ){}
  
ngOnInit(){
  this.func4();
  console.log(this.TOPICS);
}

}

 