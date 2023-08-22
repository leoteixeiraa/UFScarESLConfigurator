import { Component, OnInit } from '@angular/core';
import mermaid from 'mermaid';

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

    Platform <|-- Android
    Platform <|-- iOS
    MobilePlatform *-- Infrastructure : has
    Infrastructure <|-- Local
    Infrastructure <|-- Hybrid
    Infrastructure <|-- Cloud
    Cloud <|-- PublicCloud
    Platform o-- TypeDisplay : supports
    Platform o-- TypeInstallationMobile : supports

    class Platform {
        +String platform
        +List gestaoEstoque
        +List type_application
        +List type_instalation
        +List type_installation_web
        +addPlatform()
    }

    class Android {
        +specificFeatureAndroid()
    }

    class iOS {
        +specificFeatureiOS()
    }

    class MobilePlatform {
        +List tipoPlatforma
    }

    class Infrastructure {
        +List infrastructure
    }

    class Local {
        +setupLocalEnvironment()
    }

    class Hybrid {
        +setupHybridEnvironment()
    }

    class Cloud {
        -TipoCloud tipoCloud
        +setupCloudEnvironment()
    }

    class PublicCloud {
        +setupPublicCloud()
    }

    class TypeDisplay {
        +List type_display
        +displayTypeDetails()
    }

    class TypeInstallationMobile {
        +List type_installation_mobile
        +installationDetails()
    }
`;



  constructor() { }

  ngOnInit(): void {
    mermaid.initialize(this.config);
    mermaid.init();  // Adiciona a chamada init para inicializar qualquer tag <pre class="mermaid"> no HTML
  }
}
