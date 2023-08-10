import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Question } from 'src/app/core/modules/models/questions.model';
import { QuestionsService } from 'src/app/core/services/questions.service';

@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.sass']
})
export class FeatureFormComponent implements OnInit {
  featureForm: FormGroup = new FormGroup({});
  questions: Question[] = [];

  constructor(
    private fb: FormBuilder,
    private questionsService: QuestionsService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

    // Determina se uma questão específica deve ser exibida com base em suas dependências e condições
    shouldDisplayQuestion(question: Question): boolean {
      if (!question.dependsOn) return true;

      const dependsOnValue = this.featureForm.get(question.dependsOn)?.value;
      if (!dependsOnValue) return false;

      if (this.isArray(dependsOnValue)) {
        return dependsOnValue.some((value: any) => question.condition?.includes(value));

      }

      return question.condition?.includes(dependsOnValue) ?? false;

    }



  // Inicializa o formulário com os controles necessários
  private initForm(): void {
    this.questions = this.questionsService.getQuestions();
    for (const question of this.questions) {
      const control = question.singleOption ? new FormControl('') : new FormControl([]);
      this.featureForm.addControl(question.key, control);
    }
  }

  // Verifica se o valor é um array
  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  // Limpa as questões dependentes da questão atual
  clearDependentQuestions(questionKey: string): void {
    const dependentQuestions = this.questions.filter(q => q.dependsOn === questionKey);
    for (const dq of dependentQuestions) {
      const valueToSet = dq.singleOption ? '' : [];
      this.featureForm.get(dq.key)?.setValue(valueToSet);
      this.clearDependentQuestions(dq.key);
    }
  }

  // Verifica se todas as opções estão selecionadas
  allSelected(question: Question): boolean {
    return question.options?.every(option => this.featureForm.get(option.value.toString())?.value) || false;
  }

  // Verifica se algumas opções estão selecionadas
  someSelected(question: Question): boolean {
    return question.options?.some(option => this.featureForm.get(option.value.toString())?.value) || false;
  }

  // Define o estado de todas as opções
  setAll(question: Question, checked: boolean): void {
    question.options?.forEach(option => this.featureForm.get(option.value.toString())?.setValue(checked));
  }

  // Atualiza o formulário quando uma opção muda
  onOptionChange(event: any, question: Question, option: any): void {
    const selectedOptions = this.featureForm.get(question.key)?.value || [];
    if (event.checked) {
      selectedOptions.push(option.value);
    } else {
      const index = selectedOptions.indexOf(option.value);
      if (index >= 0) selectedOptions.splice(index, 1);
    }
    this.featureForm.get(question.key)?.setValue(selectedOptions);
    this.clearDependentQuestions(question.key);
  }

  // Atualiza o formulário quando um radio muda
  onRadioChange(event: any, question: Question): void {
    this.featureForm.get(question.key)?.setValue(event.value);
    this.clearDependentQuestions(question.key);
  }


  // Atualiza a checkbox principal dependendo das opções selecionadas
  updateParentCheckbox(question: Question): void {
    const allSelected = this.allSelected(question);
    const someSelected = this.someSelected(question);
    if (allSelected) {
      // Atualiza estado quando todas as opções estiverem selecionadas
    } else if (someSelected) {
      // Atualiza estado quando algumas opções estiverem selecionadas
    } else {
      // Atualiza estado quando nenhuma opção estiver selecionada
    }
  }
}
