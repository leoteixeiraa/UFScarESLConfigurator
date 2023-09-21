import { SharedDataService } from 'src/app/core/services/shared-data.service';
import { AfterViewInit, Component } from '@angular/core';
import mermaid from 'mermaid';
declare var window: any;


@Component({
  selector: 'app-diagram-viewer',
  templateUrl: './diagram-viewer.component.html',
  styleUrls: ['./diagram-viewer.component.sass']
})
export class DiagramViewerComponent implements AfterViewInit {
  private webData: any;
  private mobileData: any;

  config = {
    startOnLoad: true,
    sequence: {
      useMaxWidth: true,
    },
    securityLevel: 'loose',
  };

  public diagramWeb = ``;


  constructor(
    private sharedDataService: SharedDataService
  ) {
    this.webData = this.sharedDataService.getFilteredDataForWeb().subscribe(data => {
      console.log('Dados filtrados para web:', data);
    });

   this.mobileData = this.sharedDataService.getFilteredDataForMobile().subscribe(data => {
      console.log('Dados filtrados para mobile:', data);
    });

  }

  ngAfterViewInit(): void {
    this.webData = this.sharedDataService.getFilteredDataForWeb().subscribe(data => {
      this.diagramWeb = this.generateDiagram(data);
      console.log(this.diagramWeb);
      // Re-inicializar o Mermaid após a atualização do diagramWeb
      this.initializeMermaid();
    });
  }


  generateDiagram(data: any): string {
    let diagram = 'classDiagram\n';
    let relations = ''; // String separada para acumular as relações entre as classes

    diagram += `class WebPlatform {\n`;

    // Lista de chaves recebidas da API
    const receivedKeys = Object.keys(data);

    // Adicionando classes ao WebPlatform com base nas chaves recebidas
    for (const key of receivedKeys) {
      if (data.hasOwnProperty(key)) {
        diagram += `  +List ${key}\n`;
      }
    }

    diagram += '}\n';

    // Adicionando outras classes e suas conexões
    for (const key of receivedKeys) {
      if (data.hasOwnProperty(key)) {
        const values = data[key].values.join(', ');
        const alternative = data[key].alternative;
        const featureMain = data[key].featureMain;

        diagram += `class ${this.capitalizeFirstLetter(key)} {\n`;
        diagram += `  +List values : ["${values}"]\n`;
        diagram += `  +Boolean alternative : ${alternative}\n`;
        diagram += `  +Boolean featureMain : ${featureMain}\n`;
        diagram += '}\n';

        // Adicionando a relação na string separada
        relations += `WebPlatform "1" ..> "1" ${this.capitalizeFirstLetter(key)}\n`;
      }
    }

    // Adicionando as relações ao final do diagrama
    diagram += relations;

    return `${diagram}`;

  }



  // Utilidade para capitalizar a primeira letra de uma string
  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  onTabChanged(): void {
    setTimeout(() => {
      mermaid.init();
    }, 0);
  }



  initializeMermaid(): void {
    mermaid.initialize(this.config);
    setTimeout(() => {
      mermaid.init();
    }, 0);
  }


}
