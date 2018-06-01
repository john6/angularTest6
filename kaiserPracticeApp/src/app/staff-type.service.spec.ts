import { TestBed, inject } from '@angular/core/testing';

import { StaffTypeService } from './staff-type.service';

describe('StaffTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaffTypeService]
    });
  });

  it('should be created', inject([StaffTypeService], (service: StaffTypeService) => {
    expect(service).toBeTruthy();
  }));
});
