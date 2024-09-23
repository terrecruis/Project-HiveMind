import { TestBed } from '@angular/core/testing';

import { RestBackendService } from './rest-backend.service';
import { HttpClient } from '@angular/common/http';

describe('RestBackendService', () => {
  let service: RestBackendService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get','post','put','delete']);
    service = new RestBackendService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
