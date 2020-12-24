import { PageNotfoundComponent } from './../page-notfound/page-notfound.component';
import { DetailReservationComponent } from './../biens/reservation-bien/detail-reservation/detail-reservation.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BiensComponent } from '../biens/biens.component';
import { AddBienComponent } from '../biens/add-bien/add-bien.component';
import { ReservationBienComponent } from '../biens/reservation-bien/reservation-bien.component';
import { DetailBienComponent } from '../biens/detail-bien/detail-bien.component';
import { EditReservationComponent } from '../biens/reservation-bien/edit-reservation/edit-reservation.component';

const appRoute: Routes = [
  { path: '', redirectTo: '/biens', pathMatch: 'full'},
  { path: 'biens', component: BiensComponent},
  { path: 'biens/add', component: AddBienComponent},
  { path: 'biens/:id', component: DetailBienComponent},

  {
    path: 'reservations',
    component: ReservationBienComponent,
    children: [
      { path: ':id', component: DetailReservationComponent},
      { path: ':id/edit', component: EditReservationComponent},
    ]
  },

  { path: 'not-found', component: PageNotfoundComponent},
  { path: '**', component: PageNotfoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
