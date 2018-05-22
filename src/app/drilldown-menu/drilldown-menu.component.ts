import { State } from './models/state';
import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'drilldown-menu',
  templateUrl: './drilldown-menu.component.html',
  styleUrls: ['./drilldown-menu.component.css']
})
export class DrilldownMenuComponent implements OnInit, OnChanges {
 
  @Input() data: any[] = [];
  @Output() idSelected;
  stack: any[] = [];
  node: any[] = [];  
  private currentId: string;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: any): void {       
    this.node = this.data.slice(0);
  }

  onCategoryClick(item: any){
    console.log("onCategoryClick")    
    this.stack.push(Object.assign(this.node));
    this.node = item.states.slice(0);
        
  }

  onStateClick(item: any){

  }

  onBackClick(){
    if(this.stack.length > 0){
      this.node = this.stack.pop();
    }    
  }



}
