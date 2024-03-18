import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods } from 'src/data';
import { sample } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchterm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

 

}


