import { TestBed } from '@angular/core/testing';
import { AptitudesServiceService } from './aptitudes-service.service';

describe('AptitudesServiceService', () => {
  let service: AptitudesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AptitudesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
