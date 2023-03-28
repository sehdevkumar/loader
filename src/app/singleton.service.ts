import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingletonService {
  loadingCount = new BehaviorSubject<number>(0);

  constructor() {}

  incrementLoadingCount() {
    this.loadingCount.next(this.loadingCount.value + 1);
  }

  decrementLoadingCount() {
    this.loadingCount.next(this.loadingCount.value - 1);
  }
}
