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
        key: 'platform',
        label: 'Gestao de Estoque?',
        dependsOn: 'platform',
        condition: 'web', // Apenas aparecerá se 'platform' for 'web'
        singleOption: false,
        options: [
          { value: 'ESL_function', display: 'ESL_function' },
          { value: 'ESL_ESTOQUE', display: 'ESL_ESTOQUE' }
        ]
      },
      {
        key: 'platform',
        label: 'Qual platarfoma?',
        dependsOn: 'platform',
        condition: 'mobile', // Apenas aparecerá se 'platform' for 'web'
        singleOption: false,
        options: [
          { value: 'android', display: 'Android' },
          { value: 'ios', display: 'IOS' }
        ]
      },
    ];

    getQuestions() {
      return this.questions;
    }
  }
