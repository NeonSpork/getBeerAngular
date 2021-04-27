import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretAppComponent } from './secret-app.component';

describe('SecretAppComponent', () => {
  let component: SecretAppComponent;
  let fixture: ComponentFixture<SecretAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
