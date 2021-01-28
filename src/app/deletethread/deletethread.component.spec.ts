import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletethreadComponent } from './deletethread.component';

describe('DeletethreadComponent', () => {
  let component: DeletethreadComponent;
  let fixture: ComponentFixture<DeletethreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletethreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletethreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
