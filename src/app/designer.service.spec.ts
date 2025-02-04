import { TestBed } from '@angular/core/testing';
import { DesignerService } from './designer.service';

describe('DesignerService', () => {
  let service: DesignerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true from preset()', () => {
    expect(service.preset()).toBeTrue();
  });
});
