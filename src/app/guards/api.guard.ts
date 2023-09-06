import { inject } from '@angular/core';
import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const apiGuard: CanActivateFn = (route, state) => {
  if(!inject(AuthenticationService).isConnected)
    return createUrlTreeFromSnapshot(route, ['/login']);
  else
    return true;
};
