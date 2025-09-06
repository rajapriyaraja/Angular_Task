import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, FormsModule , NgSelectModule],
  templateUrl: './app.component.html',
  // template:'<h1>{{title}} </h1>',
  // template:"<h1>Hello World</h1>",
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = ' RAJAPRIYA';
  imageUrl = "https://picsum.photos/200/300"
  imageAlt = "Pictures"
  counter =100;
  Click() {
    this.counter--;
  }
 styleGuides = [
    { id: 1, name: 'Chicago Manual of Style' },
    { id: 2, name: 'APA' },
    { id: 3, name: 'MLA' }
  ];

  editingLevels = [
    { id: 1, name: 'Basic' },
    { id: 2, name: 'Medium' },
    { id: 3, name: 'Advanced' }
  ];

  referenceStyles = [
    { id: 1, name: 'APA' },
    { id: 2, name: 'Harvard' },
    { id: 3, name: 'Vancouver' }
  ];

  spellingOptions = [
    { id: 1, name: 'American English' },
    { id: 2, name: 'British English' }
  ];
  bbbb=[
    {id:1,name:"ddd"},
    {id:2,name:"xxx"}
  ]
} 





// <!-- Two way data binding -->
// <!-- <h1>{{title}}</h1>  -->
// <!-- <input type="text" [(ngModel)]="title"> --> 

// <!-- <img src="{{imageUrl}}" alt="This is the inclusion {{imageAlt}}"> -->

// <!-- Property Binding-->
// <!-- <h1 [innerText]="title"></h1>-->

// <!-- <h2>Clicked {{counter}} times by me</h2>
// <button (click)="Click()">Click Me</button>
 