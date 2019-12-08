import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterMotorcycleComponent } from './components/register-motorcycle/register-motorcycle.component';
import { AppRoutingModule } from './app-routing.module';
import { ConsultComponent } from './components/consult/consult.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConsultFilterComponent } from './components/consult-filter/consult-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterMotorcycleComponent,
    ConsultComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ConsultFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
