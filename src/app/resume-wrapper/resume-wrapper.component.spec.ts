import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeWrapperComponent } from './resume-wrapper.component';

describe('ResumeWrapperComponent', () => {
  let component: ResumeWrapperComponent;
  let fixture: ComponentFixture<ResumeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
