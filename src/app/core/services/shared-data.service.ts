import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private formData = new BehaviorSubject<any>({});
  formData$ = this.formData.asObservable();
  private formDataValue: any = {};

constructor() { }

updateFormData(data: any) {
  this.formData.next(data);
  this.formDataValue = data;
}

private filterDataForPlatform(platform: 'mobile' | 'web'): any {
  const filteredData: any = {};

  Object.keys(this.formDataValue).forEach((key) => {
    const featureData = this.formDataValue[key];

    // Verifica se a feature é relevante para a plataforma
    if (featureData.featureValue?.includes(platform)) {
      // Verifica se o campo 'values' existe e se seu tamanho é maior que zero
      if (featureData.values && featureData.values.length > 0) {
        filteredData[key] = featureData;
      }
    }
  });

  return filteredData;
}



private isPlatformSelected(platform: 'mobile' | 'web'): boolean {
  const platformData = this.formDataValue.platform;
  return platformData?.values?.includes(platform);
}

getFilteredDataForMobile(): Observable<any> {
  return this.formData$.pipe(
    map(data => {
      if (this.isPlatformSelected('mobile')) {
        return this.filterDataForPlatform('mobile');
      }
      return {};
    })
  );
}

getFilteredDataForWeb(): Observable<any> {
  return this.formData$.pipe(
    map(data => {
      if (this.isPlatformSelected('web')) {
        return this.filterDataForPlatform('web');
      }
      return {};
    })
  );
}



updateSelectedMainFeatures(data: any) {
  // Aqui, você pode definir a lógica para atualizar as features "Main" selecionadas
  // Pode ser guardando em uma variável, enviando para um servidor, etc.
}

}
