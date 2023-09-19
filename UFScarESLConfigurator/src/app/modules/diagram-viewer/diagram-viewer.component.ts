import { AfterViewInit, Component } from '@angular/core';
import mermaid from 'mermaid';
declare var window: any;


@Component({
  selector: 'app-diagram-viewer',
  templateUrl: './diagram-viewer.component.html',
  styleUrls: ['./diagram-viewer.component.sass']
})
export class DiagramViewerComponent implements AfterViewInit {

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
      +String platform : "web"
      +Boolean alternative : true
      +List gestaoEstoque
      +List infrastructure
      +List tipoCloud
      +List type_application
      +List type_instalation
      +List physical_installation_type
      +List type_display
      +List type_installation_web
  }

  class MobileApp {
    +String platform : "mobile"
    +Boolean alternative : true
}

  class Cloud {
      +String type : "public"
      +Boolean alternative : true
  }

  class GestaoEstoque {
      +List functionality
      +Boolean alternative : false
  }

  class ApplicationFunctions {
      +List functionality
      +Boolean alternative : false
  }

  class InstallationTypes {
      +List installType
      +Boolean alternative : false
  }

  class DisplayTypes {
      +List displayType
      +Boolean alternative : false
  }

  class WebInstallationTypes {
      +List installType
      +Boolean alternative : false
  }

  WebPlatform "1" ..> "" Cloud
  WebPlatform "1" ..> "1" GestaoEstoque
  WebPlatform "1" ..> "1" ApplicationFunctions
  WebPlatform "1" ..> "1" InstallationTypes
  WebPlatform "1" ..> "1" DisplayTypes
  WebPlatform "1" ..> "1" WebInstallationTypes

`;

public diagram2 = `
classDiagram
class WebPlatform {
    +String platform : "web"
    +Boolean alternative : true
    +List gestaoEstoque
    +List infrastructure
    +List tipoCloud
    +List type_application
    +List type_instalation
    +List physical_installation_type
    +List type_display
    +List type_installation_web
}

class MobileApp {
  +String platform : "mobile"
  +Boolean alternative : true
}

class Cloud {
    +String type : "public"
    +Boolean alternative : true
}

class GestaoEstoque {
    +List functionality
    +Boolean alternative : false
}

class ApplicationFunctions {
    +List functionality
    +Boolean alternative : false
}

class InstallationTypes {
    +List installType
    +Boolean alternative : false
}

class DisplayTypes {
    +List displayType
    +Boolean alternative : false
}

class WebInstallationTypes {
    +List installType
    +Boolean alternative : false
}

WebPlatform "1" ..> "" Cloud
WebPlatform "1" ..> "1" GestaoEstoque
WebPlatform "1" ..> "1" ApplicationFunctions
WebPlatform "1" ..> "1" InstallationTypes
WebPlatform "1" ..> "1" DisplayTypes
WebPlatform "1" ..> "1" WebInstallationTypes

`;

  constructor() { }

  ngAfterViewInit(): void {
    this.initializeMermaid();
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
