import { Component, OnInit } from '@angular/core';
declare var window: any;

@Component({
  selector: 'app-diagram-viewer',
  templateUrl: './diagram-viewer.component.html',
  styleUrls: ['./diagram-viewer.component.sass']
})
export class DiagramViewerComponent implements OnInit {

  config = {
    startOnLoad: true,
    sequence: {
      useMaxWidth: true,
    },
    securityLevel: 'loose',
  };

  public diagram = `
  classDiagram
  class WebPlatform {
    +String platform
    +List gestaoEstoque
    +List type_application
    +List type_instalation
    +List type_display
    +List type_installation_web
    +List type_installation_mobile
    +addPlatform()
  }

  class Cloud {
    +String type : "public"
  }

  class ESL_ESTOQUE {
    +functionality()
  }

  class ESL_function {
    +functionality()
  }

  class inventory_functions {
    +functionality()
  }

  class installation_check_funcions {
    +functionality()
  }

  class installation_check {
    +functionality()
  }

  class comissioning_check {
    +functionality()
  }

  class LED {
    +display()
  }

  class E_paper {
    +display()
  }

  class OLED {
    +display()
  }

  class profissional_installation {
    +install()
  }

  class commisioning {
    +install()
  }

  WebPlatform "1" -- "*" ESL_ESTOQUE : has
  WebPlatform "1" -- "*" ESL_function : has
  WebPlatform "1" -- "1" Cloud : uses
  WebPlatform "1" -- "*" inventory_functions : supports
  WebPlatform "1" -- "*" installation_check_funcions : supports
  WebPlatform "1" -- "*" installation_check : supports
  WebPlatform "1" -- "*" comissioning_check : supports
  WebPlatform "1" -- "*" LED : supports
  WebPlatform "1" -- "*" E_paper : supports
  WebPlatform "1" -- "*" OLED : supports
  WebPlatform "1" -- "*" profissional_installation : supports
  WebPlatform "1" -- "*" commisioning : supports
`;




  constructor() { }

  ngOnInit(): void {
    // Verifica se o Mermaid já está definido, caso contrário, espera pelo evento DOMContentLoaded
    if (window.mermaid) {
      this.initializeMermaid();
    } else {
      window.document.addEventListener('DOMContentLoaded', () => {
        this.initializeMermaid();
      });
    }
  }

  initializeMermaid(): void {
    window.mermaid.initialize(this.config);
    window.mermaid.init(); // Adiciona a chamada init para inicializar qualquer tag <pre class="mermaid"> no HTML
  }

}
