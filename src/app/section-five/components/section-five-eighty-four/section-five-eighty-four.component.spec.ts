import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFiveEightyFourComponent } from './section-five-eighty-four.component';

describe('SectionFiveEightyFourComponent', () => {
  let component: SectionFiveEightyFourComponent;
  let fixture: ComponentFixture<SectionFiveEightyFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFiveEightyFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFiveEightyFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
