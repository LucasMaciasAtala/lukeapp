import { TestBed } from '@angular/core/testing';

import { AuthenticatorInterceptorService } from './authenticator-interceptor.service';

describe('AuthenticatorInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticatorInterceptorService = TestBed.get(AuthenticatorInterceptorService);
    expect(service).toBeTruthy();
  });
});
