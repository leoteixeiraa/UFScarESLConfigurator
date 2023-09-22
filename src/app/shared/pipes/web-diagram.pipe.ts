import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'webDiagram'
})
export class WebDiagramPipe implements PipeTransform {

  transform(data: any): string {
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
        diagram += `  +List features : "${values}"\n`;
        diagram += `  +Boolean feature alternative : ${alternative}\n`;
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

  capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
