import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';7
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurentsComponent } from './restaurents/restaurents.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewRestaurentsComponent } from './view-restaurents/view-restaurents.component';
import { AddComponentComponent } from './add-component/add-component.component';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { FormsModule } from '@angular/forms';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RestaurentsComponent,
    HeaderComponent,
    FooterComponent,
    ViewRestaurentsComponent,
    AddComponentComponent,
    AddRestaurentComponent,
    UpdateRestaurentComponent,
    DeleteComponentComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
