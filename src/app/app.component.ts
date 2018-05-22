import { Component, OnInit } from '@angular/core';
import { states } from './states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: any[] = [];
  
  ngOnInit(): void {
    this.data = states.slice(0);
  }
  
}
