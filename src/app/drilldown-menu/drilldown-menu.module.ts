
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DrilldownMenuComponent } from "./drilldown-menu.component";
import { CategoryComponent } from "./catrgory/category.component";
import { StateComponent } from './state/state.component';


@NgModule({
  declarations: [
    DrilldownMenuComponent,
    CategoryComponent,
    StateComponent    
  ],
  exports: [
    DrilldownMenuComponent,      
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  
})
export class DrilldownMenuModule { }