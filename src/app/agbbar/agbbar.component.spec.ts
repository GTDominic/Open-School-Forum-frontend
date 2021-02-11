import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgbbarComponent } from './agbbar.component';

describe('AgbbarComponent', () => {
  let component: AgbbarComponent;
  let fixture: ComponentFixture<AgbbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgbbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgbbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
