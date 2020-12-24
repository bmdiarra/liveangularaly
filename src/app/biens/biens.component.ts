import { BienService } from './../services/bien.service';
import { Component, OnInit } from '@angular/core';
import { Biens } from '../models/biens.model';

@Component({
  selector: 'app-biens',
  templateUrl: './biens.component.html',
  styleUrls: ['./biens.component.css']
})
export class BiensComponent implements OnInit {
/*
  biens: {
    id: number,
    title: string,
    description: string,
    price: number,
    state: number,
    image: string,
    category: string,
    sale: boolean,
    createAt: Date
  }[]  */

  biens: Biens[] ;
  constructor(private bienservice: BienService) { }

  ngOnInit(): void {
    this.biens = this.bienservice.getAllBiens();
  }

}
