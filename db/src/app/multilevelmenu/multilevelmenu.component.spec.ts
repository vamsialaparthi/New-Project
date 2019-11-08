import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilevelmenuComponent } from './multilevelmenu.component';

describe('MultilevelmenuComponent', () => {
  let component: MultilevelmenuComponent;
  let fixture: ComponentFixture<MultilevelmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultilevelmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilevelmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
