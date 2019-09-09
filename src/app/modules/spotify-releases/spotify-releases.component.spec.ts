import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyReleasesComponent } from './spotify-releases.component';

describe('SpotifyReleasesComponent', () => {
  let component: SpotifyReleasesComponent;
  let fixture: ComponentFixture<SpotifyReleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyReleasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
