import { TestBed } from '@angular/core/testing';

import { ContactoserviceService } from './contactoservice.service';

describe('ContactoserviceService', () => {
  let service: ContactoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
