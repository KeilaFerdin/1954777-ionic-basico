import { TestBed } from '@angular/core/testing';

import { FotoserviceService } from './foto-service.service'; 

describe('FotoServiceService', () => {
  let service: FotoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
