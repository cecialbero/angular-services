import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsearchComponent } from './wsearch.component';

describe('WsearchComponent', () => {
  let component: WsearchComponent;
  let fixture: ComponentFixture<WsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
