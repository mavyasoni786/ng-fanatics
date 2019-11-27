import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-records',
  templateUrl: './recipe-records.component.html',
  styleUrls: ['./recipe-records.component.scss']
})
export class RecipeRecordsComponent implements OnInit {

  @Input() recipes=[];
  constructor() { }

  ngOnInit() {
  }

}
