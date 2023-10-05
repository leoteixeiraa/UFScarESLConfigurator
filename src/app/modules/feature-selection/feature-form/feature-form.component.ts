import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Feature } from 'src/app/core/modules/models/features.model';
import { FeaturesService } from 'src/app/core/services/features.service';
import { SharedDataService } from 'src/app/core/services/shared-data.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog/dialog.component';


@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.sass']
})
export class FeatureFormComponent implements OnInit {
  featureForm: FormGroup = new FormGroup({});
  features: Feature[] = [];
  isActive = false;

  icons = [
    {
      fontIcon: 'computer',
      label: 'Example computer icon',
      message: 'This icon represents the features for the web system.'
    },
    {
      fontIcon: 'add_to_home_screen',
      label: 'Example mobile icon',
      message: 'This icon represents the features for the mobile application.'
    },
  ];
  

  constructor(
    private fb: FormBuilder,
    private featuresService: FeaturesService,
    private sharedDataService: SharedDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.initForm();
  }

  // Determina se uma questão específica deve ser exibida com base em suas dependências e condições
  shouldDisplayQuestion(feature: Feature): boolean {
    if (!feature.dependsOn) return true;

    const dependsOnValue = this.featureForm.get(feature.dependsOn)?.value;
    if (!dependsOnValue) return false;

    if (this.isArray(dependsOnValue)) {
      return dependsOnValue.some((value: any) => feature.condition?.includes(value));

    }

    return feature.condition?.includes(dependsOnValue) ?? false;

  }
  // Inicializa o formulário com os controles necessários
  private initForm(): void {
    this.features = this.featuresService.getFeatures();
    console.log('Lista de features -->', this.features);
    for (const feature of this.features) {
      const control = feature.alternative ? new FormControl('') : new FormControl([]);
      this.featureForm.addControl(feature.key, control);
    }
  }

  // Verifica se o valor é um array
  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  // Limpa as questões dependentes da questão atual
  clearDependentQuestions(questionKey: string): void {
    const dependentQuestions = this.features.filter(q => q.dependsOn === questionKey);
    for (const dq of dependentQuestions) {
      const valueToSet = dq.alternative ? '' : [];
      this.featureForm.get(dq.key)?.setValue(valueToSet);
      this.clearDependentQuestions(dq.key);
    }
  }

  // Verifica se todas as opções estão selecionadas
  allSelected(feature: Feature): boolean {
    return feature.options?.every(option => this.featureForm.get(option.value.toString())?.value) || false;
  }

  processForm(): any {
    const processedData: any = {};
    const selectedMainFeatures: any = {};

    // Iterando pelas features
    for (const feature of this.features) {
      const value = this.featureForm.get(feature.key)?.value;

      if (feature.featureMain) {
        selectedMainFeatures[feature.key] = {
          value,
          featureMain: feature.featureMain,
          featureValue: feature.featureValue ? feature.featureValue : '',
        };
      }

      // Se é uma lista/array
      if (Array.isArray(value)) {
        processedData[feature.key] = {
          values: value,
          alternative: feature.alternative,
          featureMain: feature.featureMain,
          featureValue: feature.featureValue ? feature.featureValue : '',

        };
      }
      // Se é uma string única
      else {
        processedData[feature.key] = {
          value: value,
          alternative: feature.alternative,
          featureMain: feature.featureMain, // adicionar valor "main" ao objeto
          featureValue: feature.featureValue ? feature.featureValue : '',
        };
      }
    }

    // Enviar os valores das features "Main" selecionadas para o shared-data service
    this.sharedDataService.updateSelectedMainFeatures(selectedMainFeatures);

    return processedData;
  }

  // Verifica se algumas opções estão selecionadas
  someSelected(feature: Feature): boolean {
    return feature.options?.some(option => this.featureForm.get(option.value.toString())?.value) || false;
  }

  // Define o estado de todas as opções
  setAll(feature: Feature, checked: boolean): void {
    feature.options?.forEach(option => this.featureForm.get(option.value.toString())?.setValue(checked));
  }

  // Atualiza o formulário quando uma opção muda
  onOptionChange(event: any, feature: Feature, option: any): void {
    const selectedOptions = this.featureForm.get(feature.key)?.value || [];
    if (event.checked) {
      selectedOptions.push(option.value);
    } else {
      const index = selectedOptions.indexOf(option.value);
      if (index >= 0) selectedOptions.splice(index, 1);
    }
    this.featureForm.get(feature.key)?.setValue(selectedOptions);
    this.clearDependentQuestions(feature.key);
    console.log('Formulário atualizado:', this.featureForm.value);

    this.sharedDataService.updateFormData(this.processForm());
  }

  getIconsForFeature(feature: Feature): string[] {
    const selectedPlatforms = this.featureForm.get('platform')?.value || [];

    if (!feature.featureValue) return [];

    let icons = [];

    if (feature.featureValue.includes('web') && selectedPlatforms.includes('web')) {
      icons.push('computer');
    }

    if (feature.featureValue.includes('mobile') && selectedPlatforms.includes('mobile')) {
      icons.push('add_to_home_screen');
    }

    return icons;
  }


  // Atualiza o formulário quando um radio muda
  onRadioChange(event: any, feature: Feature): void {
    this.featureForm.get(feature.key)?.setValue(event.value);
    this.clearDependentQuestions(feature.key);
    this.sharedDataService.updateFormData(this.processForm());
  }


  // Atualiza a checkbox principal dependendo das opções selecionadas
  updateParentCheckbox(feature: Feature): void {
    const allSelected = this.allSelected(feature);
    const someSelected = this.someSelected(feature);
    if (allSelected) {
      // Atualiza estado quando todas as opções estiverem selecionadas
    } else if (someSelected) {
      // Atualiza estado quando algumas opções estiverem selecionadas
    } else {
      // Atualiza estado quando nenhuma opção estiver selecionada
    }
  }



  toggleNavigation() {
    this.isActive = !this.isActive;
  }

  openDialog(event: Event) {
    // Para evitar a propagação do evento quando o usuário clica em um ícone, que poderia, por exemplo, acionar outro evento de clique no elemento pai.
    event.stopPropagation();

    // Obter a mensagem do atributo 'data-message' do elemento clicado.
    const message = (event.target as HTMLElement).closest('[data-message]')?.getAttribute('data-message');

    // Se houver uma mensagem, abra o diálogo. Se não houver uma mensagem, nada acontece.
    if (message) {
        this.dialog.open(DialogComponent, {
            data: {
                title: 'Icon Description',
                message: message
            }
        });
    }
}
}


