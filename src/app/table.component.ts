import { Component, NgModule,  OnInit } from '@angular/core';

@Component({
selector: 'basic-table',
templateUrl: './basic-table.component.html',

})



export class BasicTableComponent {
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

}