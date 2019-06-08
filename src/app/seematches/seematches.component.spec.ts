import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeematchesComponent } from './seematches.component';

describe('SeematchesComponent', () => {
  let component: SeematchesComponent;
  let fixture: ComponentFixture<SeematchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeematchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeematchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
