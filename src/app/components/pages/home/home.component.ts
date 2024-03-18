import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  food:Food[] = [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((parms) => {
      if(parms.searchTerm)
      this.food = this.foodService.getAllFoodsBySearchterm(parms.searchTerm);
    else
    this.food = foodService.getAll();
    })
    
   }

  ngOnInit(): void {
  }

}
