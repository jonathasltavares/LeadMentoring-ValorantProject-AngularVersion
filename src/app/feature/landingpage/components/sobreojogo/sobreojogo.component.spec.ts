import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreojogoComponent } from './sobreojogo.component';

describe('SobreojogoComponent', () => {
  let component: SobreojogoComponent;
  let fixture: ComponentFixture<SobreojogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreojogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreojogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
