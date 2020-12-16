import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListxComponent } from './listx.component';

describe('ListxComponent', () => {
  let component: ListxComponent;
  let fixture: ComponentFixture<ListxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
