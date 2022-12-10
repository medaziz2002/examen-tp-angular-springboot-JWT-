import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MestelephonesComponent } from './mestelephones.component';

describe('MestelephonesComponent', () => {
  let component: MestelephonesComponent;
  let fixture: ComponentFixture<MestelephonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MestelephonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MestelephonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
