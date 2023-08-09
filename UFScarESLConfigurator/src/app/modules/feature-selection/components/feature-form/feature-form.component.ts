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
    private questionsService: QuestionsService
  ) {}

  ngOnInit() {
    this.questions = this.questionsService.getQuestions();
    for (let question of this.questions) {
      if (question.singleOption) {
        this.featureForm.addControl(question.key, new FormControl(''));
      } else {
        question.options?.forEach(option => {
          this.featureForm.addControl(option.value.toString(), new FormControl(false));
        });
      }
    }
  }

  allSelected(question: Question): boolean {
    return question.options?.every(option => this.featureForm.get(option.value.toString())?.value) || false;
  }

  someSelected(question: Question): boolean {
    return question.options?.some(option => this.featureForm.get(option.value.toString())?.value) || false;
  }

  setAll(question: Question, checked: boolean) {
    question.options?.forEach(option => this.featureForm.get(option.value.toString())?.setValue(checked));
  }

  updateParentCheckbox(question: Question) {
    const allSelected = this.allSelected(question);
    const someSelected = this.someSelected(question);
    if (allSelected) {
      // Atualize seu estado aqui quando todas as opções estiverem selecionadas
    } else if (someSelected) {
      // Atualize seu estado aqui quando algumas opções estiverem selecionadas
    } else {
      // Atualize seu estado aqui quando nenhuma opção estiver selecionada
    }
  }
}
