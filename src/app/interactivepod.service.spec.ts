import { TestBed } from '@angular/core/testing';

import { InteractivepodService } from './interactivepod.service';

describe('InteractivepodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InteractivepodService = TestBed.get(InteractivepodService);
    expect(service).toBeTruthy();
  });
});
