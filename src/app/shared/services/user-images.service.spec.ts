import { TestBed } from '@angular/core/testing';

import { UserImagesService } from './user-images.service';

describe('UserImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserImagesService = TestBed.get(UserImagesService);
    expect(service).toBeTruthy();
  });
});
