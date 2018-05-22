import { Component, OnInit, Input } from '@angular/core';
import {State} from '../models/state'

@Component({
  selector: 'state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
 
  @Input() state: State;
  
  private data: any ={} 

  constructor() { }

  ngOnInit() {
       
  }
  ngOnChanges(changes: any) {
    this.data = this.state;
    console.log(this.state);
  }

}
