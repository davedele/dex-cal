import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DexCalComponent } from './dex-cal.component';

describe('DexCalComponent', () => {
  let component: DexCalComponent;
  let fixture: ComponentFixture<DexCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
