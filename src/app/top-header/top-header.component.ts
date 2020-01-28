import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoAddRecipe() {
    this.router.navigate(["add-recipe"]);
  }
  gotoRecipes() {
    this.router.navigate(["recipes"]);
  }
  gotoHome() {
    this.router.navigate(["home"]);
  }


}
