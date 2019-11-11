import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {LayoutComponent} from './components/layout/layout.component';
import {CalculatorComponent} from './components/calculator/calculator.component';


@NgModule({
  declarations: [LayoutComponent, CalculatorComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    CalculatorComponent
  ]
})
export class HomeModule {
}
