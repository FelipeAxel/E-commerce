import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNaoEncotradaComponent } from './new-nao-encotrada.component';

describe('NewNaoEncotradaComponent', () => {
  let component: NewNaoEncotradaComponent;
  let fixture: ComponentFixture<NewNaoEncotradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewNaoEncotradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewNaoEncotradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
