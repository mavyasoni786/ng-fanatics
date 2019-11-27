import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeRecordsComponent } from './recipe-records.component';

describe('RecipeRecordsComponent', () => {
  let component: RecipeRecordsComponent;
  let fixture: ComponentFixture<RecipeRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
