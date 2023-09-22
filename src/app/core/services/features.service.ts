import { Injectable } from '@angular/core';
import { Feature } from '../modules/models/features.model';

  @Injectable({
    providedIn: 'root'
  })
  export class FeaturesService {

    private features: Feature[] = [
      {
        key: 'platform',
        label: 'Which platform?',
        alternative: false,
        featureMain: true,
        options: [
          { value: 'mobile', display: 'Mobile' },
          { value: 'web', display: 'Web' }
        ]
      },
      {
        key: 'gestaoEstoque',
        label: 'Stock Management?',
        dependsOn: 'platform',
        condition: ['web'],
        alternative: false,
        featureMain: false,
        featureValue: ['web'],
        options: [
          { value: 'ESL_function', display: 'ESL_function' },
          { value: 'ESL_ESTOQUE', display: 'ESL_ESTOQUE' }
        ]
      },
      {
        key: 'tipoPlatforma',
        label: 'Which platform type?',
        dependsOn: 'platform',
        condition: ['mobile'],
        alternative: false,
        featureMain: false,
        featureValue: ['mobile'],
        options: [
          { value: 'android', display: 'Android' },
          { value: 'ios', display: 'IOS' },
        ]
      },
      {
        key: 'infrastructure',
        label: 'What is your infrastructure type?',
        dependsOn: 'platform',
        condition: ['web', 'mobile'],
        alternative: false,
        featureMain: false,
        featureValue: ['web', 'mobile'],
        options: [
          { value: 'local', display: 'Local' },
          { value: 'cloud', display: 'Cloud' },
          { value: 'hybrid', display: 'Hybrid' },
        ]
      },
      {
        key: 'tipoCloud',
        label: 'What type of Cloud environment?',
        dependsOn: 'infrastructure',
        condition: ['cloud'],
        alternative: true,
        featureMain: false,
        featureValue: ['web', 'mobile'],
        options: [
          { value: 'public', display: 'Public' },
          { value: 'private', display: 'Private' },
        ]
      },
      {
        key: 'type_application',
        label: 'What type of application?',
        dependsOn: 'platform',
        condition: ['web'],
        alternative: false,
        featureMain: false,
        featureValue: ['web'],
        options: [
          { value: 'inventory_functions', display: 'Inventory Functions' },
          { value: 'installation_check_funcions', display: 'Installation Check Functions' },
          { value: 'price_and_promotion_functions', display: 'Price and Promotion Functions' },
        ]
      },
      {
        key: 'type_instalation',
        label: 'What type of installation?',
        dependsOn: 'type_application',
        condition: ['installation_check_funcions'],
        featureMain: false,
        alternative: false,
        featureValue: ['web'],
        options: [
          { value: 'comissioning_check', display: 'Commissioning Check' },
          { value: 'installation_check', display: 'Installation Check' },
        ]
      },
      {
        key: 'physical_installation_type',
        label: 'What type of physical installation?',
        dependsOn: 'type_application',
        condition: ['installation_check_funcions'],
        alternative: false,
        featureMain: false,
        featureValue: ['web'],
        options: [
          { value: 'shelf_mount', display: 'Shelf Mount' }, //Esta é a instalação padrão onde as etiquetas são montadas diretamente nas prateleiras.
          { value: 'pegboard_hook', display: 'Pegboard Hook' }, // painéis perfurados para pendurar produtos.
          { value: 'magnetic_mount', display: 'Magnetic Mount' }, // prateleiras metálicas
        ]
      },
      {
        key: 'type_display',
        label: 'What type of ESL display?',
        dependsOn: 'platform',
        condition: ['web', 'mobile'],
        alternative: false,
        featureMain: false,
        featureValue: ['web', 'mobile'],
        options: [
          { value: 'LCD', display: 'LCD' },
          { value: 'E_paper', display: 'E-paper' },
          { value: 'LED', display: 'LED' },
          { value: 'OLED', display: 'OLED' },
          { value: 'TFT', display: 'TFT' },
        ]
      },
      {
        key: 'type_installation_web',
        label: 'What type of Web installation?',
        dependsOn: 'platform',
        condition: ['web'],
        featureValue: ['web'],
        alternative: false,
        featureMain: false,
        options: [
          { value: 'profissional_installation', display: 'Professional Installation' },
          { value: 'commisioning', display: 'Commissioning' },
        ]
      },
      {
        key: 'type_installation_mobile',
        label: 'What type of Mobile installation?',
        dependsOn: 'platform',
        condition: ['mobile'],
        alternative: false,
        featureMain: false,
        featureValue: ['mobile'],
        options: [
          { value: 'specific_device', display: 'Specific Device' },
        ]
      },
    ];

    getFeatures() {
      return this.features;
    }
  }
