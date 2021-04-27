import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretNeonSignComponent } from './secret-neon-sign.component';

describe('SecretNeonSignComponent', () => {
  let component: SecretNeonSignComponent;
  let fixture: ComponentFixture<SecretNeonSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretNeonSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretNeonSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
