import { Utilservice } from './../../../services/utilservice.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css']
})
export class ItemBienComponent implements OnInit {

  @Input() itembien: any;
  router: Router;

  constructor(private u: Utilservice) { }

  ngOnInit(): void {
  }


}
