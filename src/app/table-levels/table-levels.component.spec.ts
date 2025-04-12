import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLevelsComponent } from './table-levels.component';

describe('TableLevelsComponent', () => {
  let component: TableLevelsComponent;
  let fixture: ComponentFixture<TableLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLevelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
