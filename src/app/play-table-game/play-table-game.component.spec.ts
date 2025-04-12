import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayTableGameComponent } from './play-table-game.component';

describe('PlayTableGameComponent', () => {
  let component: PlayTableGameComponent;
  let fixture: ComponentFixture<PlayTableGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayTableGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayTableGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
