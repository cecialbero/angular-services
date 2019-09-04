import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeProfileComponent } from './youtube-profile.component';

describe('YoutubeProfileComponent', () => {
  let component: YoutubeProfileComponent;
  let fixture: ComponentFixture<YoutubeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
