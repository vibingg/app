import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliceVibePageComponent } from './alice-vibe-page.component';

describe('AliceVibePageComponent', () => {
  let component: AliceVibePageComponent;
  let fixture: ComponentFixture<AliceVibePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliceVibePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AliceVibePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
