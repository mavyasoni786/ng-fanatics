import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-records',
  templateUrl: './recipe-records.component.html'
})
export class RecipeRecordsComponent implements OnInit {

  @Input() recipes=[];
  constructor() { }

  ngOnInit() {
  }

}
