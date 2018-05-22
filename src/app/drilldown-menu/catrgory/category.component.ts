
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnChanges {
 
  @Input() category: Category;
  
  private data: any ={} 

  constructor() { }

  ngOnInit() {
       
  }
  ngOnChanges(changes: any) {
    this.data = this.category;
    console.log(this.category);
  }

  
}
