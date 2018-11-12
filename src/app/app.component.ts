import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-prj';
  
  ngOnInit(): void{
    console.log("test");
    setTimeout(() => {
      this.title = 'Hello world';
    }, 1000);
  }
}
