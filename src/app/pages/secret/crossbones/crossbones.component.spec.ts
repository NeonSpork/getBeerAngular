import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossbonesComponent } from './crossbones.component';

describe('CrossbonesComponent', () => {
  let component: CrossbonesComponent;
  let fixture: ComponentFixture<CrossbonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossbonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossbonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
