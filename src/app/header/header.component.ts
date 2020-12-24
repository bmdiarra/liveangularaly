import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /* @Output() newSearchEvent = new EventEmitter<string>(); */

  constructor() { }

  ngOnInit(): void {
  }
/*
  searchBien(value: string) {
    this.newSearchEvent.emit(value);
  } */

}
