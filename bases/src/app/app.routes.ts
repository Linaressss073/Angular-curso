import { Routes } from '@angular/router';
import {CounterPageComponent} from './pages/counter/counter-page.component';
import {CalculatorPageComponent} from './pages/calculator/calculator-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'calculator',
    component: CalculatorPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  }
];
