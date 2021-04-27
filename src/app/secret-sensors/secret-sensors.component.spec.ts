import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretSensorsComponent } from './secret-sensors.component';

describe('SecretSensorsComponent', () => {
  let component: SecretSensorsComponent;
  let fixture: ComponentFixture<SecretSensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretSensorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
