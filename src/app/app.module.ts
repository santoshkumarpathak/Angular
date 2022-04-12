import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployesComponent } from './component/employes/employes.component';
import { TabletComponent } from './medication/tablet/tablet.component';
import { CapisuleComponent } from './medication/capisule/capisule.component';
import { SyrupComponent } from './medication/syrup/syrup.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployesComponent,
    TabletComponent,
    CapisuleComponent,
    SyrupComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
