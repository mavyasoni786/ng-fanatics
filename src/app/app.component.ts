import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello-project';
  recipeList= [
    {
      name: 'Burger',
      chef: 'Ranveer Brar',
      image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
      info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       type: 'Non-Veg'
    },
    {
      name: 'Italian Pasta',
      chef: 'JM',
      image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
      info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      type: 'Veg'
    },
    {
      name: 'Chicken Maggie',
      chef: 'Nisha Madhulika',
      image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
      info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      type: 'Non-Veg'
    },
    {
      name: 'Vegeg. PulaVeg',
      chef: 'Tarla Dalal',
      image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
      info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      type: 'Veg'
    },
  ];

  addRecipe(value:{name:string,chef:string,info:string,image:string,type:string}){
    this.recipeList.push({
      name: value.name,
      chef: value.chef,
      info:value.info,
      image: value.image,
      type: value.type,
    });
  }
}
