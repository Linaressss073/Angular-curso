import { Routes } from '@angular/router';
import {CounterPageComponent} from './pages/counter/counter-page.component';
import {CalculatorPageComponent} from './pages/calculator/calculator-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'calculator',
    component: CalculatorPageComponent
  }
];
