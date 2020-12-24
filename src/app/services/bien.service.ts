import { Biens } from './../models/biens.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BienService {
  biens: Biens[] = [
    {
      id: 1,
      title: 'computer',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas oda aspernit conséquuntur magni dolores eos qui ratione voluptatem sequi ',
      price: 1000,
      image: 'https://source.unsplash.com/1080x700?computer',
      state: 20,
      category: 'cool',
      sale: false,
      createAt: new Date(2019, 10, 15, 22, 23)

    }, {
      id: 1,
      title: 'car',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas oda aspernit conséquuntur magni dolores eos qui ratione voluptatem sequi ',
      price: 2200,
      image: 'https://source.unsplash.com/1080x700?car',
      state: 2,
      category: 'super',
      sale: true,
      createAt: new Date(2020, 10, 15, 22, 23)

    }, {
      id: 3,
      title: 'bien',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas oda aspernit conséquuntur magni dolores eos qui ratione voluptatem sequi ',
      price: 500,
      image: 'https://source.unsplash.com/1080x700?bien',
      state: 1,
      category: 'genial',
      sale: false,
      createAt: new Date(2020, 12, 15, 22, 23)

    }, {
      id: 4,
      title: 'numero',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas oda aspernit conséquuntur magni dolores eos qui ratione voluptatem sequi ',
      price: 500,
      image: 'https://source.unsplash.com/1080x700?number',
      state: 1,
      category: 'genial',
      sale: false,
      createAt: new Date(2019, 12, 22, 22, 23)

    }, {
      id: 5,
      title: 'bien5',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas oda aspernit conséquuntur magni dolores eos qui ratione voluptatem sequi ',
      price: 2500,
      image: 'https://source.unsplash.com/1080x700?random',
      state: 4,
      category: 'genial2',
      sale: false,
      createAt: new Date(2020, 12, 22, 51, 23)

    }, {
      id: 6,
      title: 'house',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas oda aspernit conséquuntur magni dolores eos qui ratione voluptatem sequi ',
      price:  530,
      image: 'https://source.unsplash.com/1080x700?house',
      state: 11,
      category: 'genial',
      sale: false,
      createAt: new Date(2019, 10, 15, 22, 23)

    }
  ];


  constructor() { }

  getAllBiens(): Biens[]{
    return this.biens;
  }
  /**
   *
   * @param id,
   * @return bien: Bien | null
   */
  getBienById(id: number): Biens{
    const bientFound = this.biens.find(
      (b: Biens ) => {
        return b.id  === id ;
      }
    );
    return bientFound;
  }

  addBien(newBien: Biens): any{
    this.biens.push(newBien);
  }

  updateBien(bienUpdate: Biens): any{
    let oldBien: Biens = this.biens.find(
      (b: Biens ) => {
        return b.id  === bienUpdate.id ;
      }
    );
    if (oldBien){
      oldBien = {...bienUpdate};
    }
  }

  getLastId(): number{
    return this.biens[ this.biens.length - 1 ] ? this.biens[ this.biens.length - 1 ].id : 0;
  }

  /* getSimilarBienById(id: number): Biens[]{
    this.biens
  } */

}
