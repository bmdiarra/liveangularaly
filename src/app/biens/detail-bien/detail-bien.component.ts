import { Biens } from './../../models/biens.model';
import { BienService } from './../../services/bien.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {

  id: number;
  private sub: any;
  b: Biens;

  constructor(private route: ActivatedRoute, private bienservice: BienService) { }

  ngOnInit(): void {

    setTimeout(() => {
      console.log('cool');
    }, 3000);

    // this.id = +this.route.snapshot.params['id'];
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.b = this.bienservice.getBienById(this.id);
      // In a real app: dispatch action to load the details here.

   });

   // For next time that this component will be loaded

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
