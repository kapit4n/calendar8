import { TestBed, inject } from '@angular/core/testing';

import { Month8Service } from './month8.service';

describe('Month8Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Month8Service]
    });
  });

  it('should be created', inject([Month8Service], (service: Month8Service) => {
    expect(service).toBeTruthy();
  }));
});
