import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromHome from './store/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/home.effects';
import { HomeDashboardComponent } from './layouts/home-dashboard/home-dashboard.component';
import { HomeThemeModule } from './home-theme.module';

@NgModule({
  declarations: [HomeDashboardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeThemeModule,
    StoreModule.forFeature('home', fromHome.reducer),
    EffectsModule.forFeature([HomeEffects])
  ]
})
export class HomeModule { }
