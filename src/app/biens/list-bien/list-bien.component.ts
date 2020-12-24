import { Biens } from './../../models/biens.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {

  search = '';

  @Input() mesbiens: Biens;

  constructor() { }

  ngOnInit(): void {


  }

}
