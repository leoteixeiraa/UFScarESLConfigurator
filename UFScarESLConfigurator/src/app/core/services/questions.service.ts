  import { Injectable } from '@angular/core';
  import { Question } from '../modules/models/questions.model';

  @Injectable({
    providedIn: 'root'
  })
  export class QuestionsService {

    private questions: Question[] = [
      {
        key: 'platform',
        label: 'Qual plataforma?',
        singleOption: true,
        options: [
          { value: 'mobile', display: 'Mobile' },
          { value: 'web', display: 'Web' }
        ]
      },
      {
        key: 'gestaoEstoque',
        label: 'Gestao de Estoque?',
        dependsOn: 'platform',
        condition: ['web'], // Apenas aparecerá se 'platform' for 'web'
        singleOption: false,
        options: [
          { value: 'ESL_function', display: 'ESL_function' },
          { value: 'ESL_ESTOQUE', display: 'ESL_ESTOQUE' }
        ]
      },
      {
        key: 'tipoPlatforma',
        label: 'Qual platarfoma?',
        dependsOn: 'platform',
        condition: ['mobile'], // Apenas aparecerá se 'platform' for 'mobile'
        singleOption: false,
        options: [
          { value: 'android', display: 'Android' },
          { value: 'ios', display: 'IOS' },
        ]
      },
      {
        key: 'infrastructure',
        label: 'Qual Infrastrutura do seu ambiente?',
        dependsOn: 'platform',
        condition: ['web', 'mobile'],
        singleOption: false,
        options: [
          { value: 'local', display: 'Local' },
          { value: 'cloud', display: 'Cloud' },
          { value: 'hybrid', display: 'Hybrid' },
        ]
      },
      {
        key: 'tipoCloud',
        label: 'Qual tipo de ambiente Cloud ?',
        dependsOn: 'infrastructure',
        condition: ['cloud'],
        singleOption: true,
        options: [
          { value: 'public', display: 'Public' },
          { value: 'private', display: 'Private' },
        ]
      },
      {
        key: 'type_application',
        label: 'Qual o tipo de aplicação ?',
        dependsOn: 'platform',
        condition: ['web'],
        singleOption: false,
        options: [
          { value: 'inventory_functions', display: 'Inventory_functions' },
          { value: 'installation_check_funcions', display: 'Installation_Check_Funcions' },
          { value: 'price_and_promotion_functions', display: 'Price_and_promotion_functions' },
        ]
      },
      {
        key: 'type_instalation',
        label: 'Qual o tipo de instalação ?',
        dependsOn: 'type_application',
        condition: ['installation_check_funcions'],
        singleOption: false,
        options: [
          { value: 'comissioning_check', display: 'Comissioning_check' },
          { value: 'installation_check', display: 'Installation_Check' },
        ]
      },
      {
        key: 'type_display',
        label: 'Qual o tipo de tela do seu ESL ?',
        dependsOn: 'platform',
        condition: ['web', 'mobile'],
        singleOption: false,
        options: [
          { value: 'LCD', display: 'LCD' },
          { value: 'E_paper', display: 'E_paper' },
          { value: 'LED', display: 'LED' },
          { value: 'OLED', display: 'OLED' },
          { value: 'TFT', display: 'TFT' },
        ]
      },
      {
        key: 'type_installation_web',
        label: 'Qual o tipo de instalacao Web ?',
        dependsOn: 'platform',
        condition: ['web'],
        singleOption: false,
        options: [
          { value: 'profissional_installation', display: 'Profissional_installation' },
          { value: 'commisioning', display: 'Commisioning' },
        ]
      },
      {
        key: 'type_installation_mobile',
        label: 'Qual o tipo de instalacao Mobile ?',
        dependsOn: 'platform',
        condition: ['mobile'],
        singleOption: false,
        options: [
          { value: 'specific_device', display: 'Specific_device' },
        ]
      },

    ];

    getQuestions() {
      return this.questions;
    }
  }
