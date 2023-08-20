import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private formData = new BehaviorSubject<any>({});
  formData$ = this.formData.asObservable();

constructor() { }

updateFormData(data: any) {
  this.formData.next(data);
}

}
