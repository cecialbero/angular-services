import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPaginationComponent } from './directives-pagination.component';

describe('DirectivesPaginationComponent', () => {
  let component: DirectivesPaginationComponent;
  let fixture: ComponentFixture<DirectivesPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
