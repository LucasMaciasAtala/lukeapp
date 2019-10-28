import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [AppComponent, ToolbarComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CoreModule

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
