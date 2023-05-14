import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActitudesComponent } from './actitudes.component';

describe('ActitudesComponent', () => {
  let component: ActitudesComponent;
  let fixture: ComponentFixture<ActitudesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActitudesComponent]
    });
    fixture = TestBed.createComponent(ActitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
