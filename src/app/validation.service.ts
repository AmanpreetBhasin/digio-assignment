import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  public validationPipe$: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(true);
  public validationPipeObs$ = this.validationPipe$.asObservable();

  constructor() { }

  updateValidation(value: boolean) {
      this.validationPipe$.next(value);
  }
}
