import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableItemComponent } from './variable-item.component';

describe('VariableItemComponent', () => {
  let component: VariableItemComponent;
  let fixture: ComponentFixture<VariableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
