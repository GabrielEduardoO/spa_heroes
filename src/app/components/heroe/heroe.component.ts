import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  casa: string;
  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router
    ) {
      activatedRoute.params.subscribe( params => {
       // console.log(params['id'])
       this.heroe = _heroesService.getHeroe(params['id']);
       this.casa = this.heroe.casa;
       console.log(this.heroe);
      } );

   }

  ngOnInit() {
  }

  volverHeroes(){
    this.router.navigate(['/heroes']);
  }

}
