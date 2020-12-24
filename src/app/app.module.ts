import { AppRoutingModule } from './app-routing/app-routing.module';
import { Utilservice } from './services/utilservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BiensComponent } from './biens/biens.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ItemBienComponent } from './biens/list-bien/item-bien/item-bien.component';
import { FormsModule } from '@angular/forms';
import { JumbotronComponent } from './biens/jumbotron/jumbotron.component';
import { PipeseparatorPipe } from './pipes/pipeseparator.pipe';
import { TimeleftPipe } from './pipes/timeleft.pipe';
import { SummarizePipe } from './pipes/summarize.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ReservationBienComponent } from './biens/reservation-bien/reservation-bien.component';
import { DetailReservationComponent } from './biens/reservation-bien/detail-reservation/detail-reservation.component';
import { EditReservationComponent } from './biens/reservation-bien/edit-reservation/edit-reservation.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BiensComponent,
    AddBienComponent,
    ListBienComponent,
    DetailBienComponent,
    ItemBienComponent,
    JumbotronComponent,
    PipeseparatorPipe,
    TimeleftPipe,
    SummarizePipe,
    FilterPipe,
    ReservationBienComponent,
    DetailReservationComponent,
    EditReservationComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    Utilservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
