import { TestBed } from '@angular/core/testing';
import { SwUpdate, ServiceWorkerModule } from '@angular/service-worker';

import { UpdateService } from './update.service';

describe('UpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ServiceWorkerModule.register('', {enabled: false})],
    providers: [SwUpdate]
  }));

  it('should be created', () => {
    const service: UpdateService = TestBed.get(UpdateService);
    expect(service).toBeTruthy();
  });
});