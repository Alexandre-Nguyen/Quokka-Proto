import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuokkaTaskComponent } from './quokka-task.component';

describe('QuokkaTaskComponent', () => {
  let component: QuokkaTaskComponent;
  let fixture: ComponentFixture<QuokkaTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuokkaTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuokkaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
