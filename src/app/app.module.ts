import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { MapComponent } from './map/map.component';
import { FirstCardComponent } from './footer/first-card/first-card.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SecondCardComponent } from './second-card/second-card.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThirdCardComponent } from './third-card/third-card.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavbarComponent,
    LayoutComponent,
    MapComponent,
    FirstCardComponent,
    SecondCardComponent,
    ThirdCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,NgxEchartsModule.forRoot({
       echarts: () => import('echarts'), 
    })
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
