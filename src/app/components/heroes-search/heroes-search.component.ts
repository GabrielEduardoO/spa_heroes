import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
})
export class HeroesSearchComponent implements OnInit {

  heroes: any [] = [];
  constructor(
              private activateRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router
  ) {
    activateRoute.params.subscribe( params => {
       this.heroes = _heroesService.buscarHeroes(params['termino']);
     });
  }

  ngOnInit() {
    console.log(this.heroes);
  }


}
