import { MobileDiagramPipe } from './../../shared/pipes/mobile-diagram.pipe';
import { SharedDataService } from 'src/app/core/services/shared-data.service';
import {
  AfterViewInit,
  Component,
  ChangeDetectorRef,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import mermaid from 'mermaid';
import { WebDiagramPipe } from 'src/app/shared/pipes/web-diagram.pipe';

@Component({
  selector: 'app-diagram-viewer',
  templateUrl: './diagram-viewer.component.html',
  styleUrls: ['./diagram-viewer.component.sass'],
})
export class DiagramViewerComponent implements AfterViewInit, OnDestroy {
  private webDataSubscription: any;
  private mobileDataSubscription: any;

  config = {
    startOnLoad: true,
    sequence: {
      useMaxWidth: true,
    },
    securityLevel: 'loose',
  };

  public diagramWeb = ``;
  public diagramMobile = ``;

  constructor(
    private sharedDataService: SharedDataService,
    private cdr: ChangeDetectorRef,
    private el: ElementRef,
    private webDiagramPipe: WebDiagramPipe,
    private mobileDiagramPipe: MobileDiagramPipe
  ) {}

  ngAfterViewInit(): void {
    mermaid.initialize(this.config);

    this.webDataSubscription = this.sharedDataService
      .getFilteredDataForWeb()
      .subscribe((data) => {
        this.diagramWeb = this.webDiagramPipe.transform(data);
        console.log(this.diagramWeb);
        if (this.shouldRenderDiagramWeb()) {
          this.renderMermaidDiagram(this.diagramWeb, 'diagramaClassWeb');
        }
        this.cdr.detectChanges();
      });

    this.mobileDataSubscription = this.sharedDataService
      .getFilteredDataForMobile()
      .subscribe((data) => {
        this.diagramMobile = this.mobileDiagramPipe.transform(data);
        console.log(this.diagramMobile);
        if (this.shouldRenderDiagramMobile()) {
          this.renderMermaidDiagram(this.diagramMobile, 'diagramaClassMobile');
        }
        this.cdr.detectChanges();
      });
  }

  renderMermaidDiagram(diagramString: string, containerId: string): void {
    const container = this.el.nativeElement.querySelector(`#${containerId}`);
    if (container) {
      container.innerHTML = `<div class="mermaid">${diagramString}</div>`;
      mermaid.init(undefined, container.querySelectorAll('.mermaid'));
    }
  }

  private shouldRenderDiagramWeb(): boolean {
    // Checa se o diagramWeb contém mais do que apenas a classe padrão mobilePlatform
    return (this.diagramWeb.match(/class/g) || []).length > 2;
  }
  private shouldRenderDiagramMobile(): boolean {
    // Checa se o diagramMobile contém mais do que apenas a classe padrão mobilePlatform
    return (this.diagramMobile.match(/class/g) || []).length > 0.5;
  }

  onTabChanged(): void {
    setTimeout(() => {
      mermaid.init();
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.webDataSubscription || this.mobileDataSubscription) {
      this.webDataSubscription.unsubscribe();
      this.mobileDataSubscription.unsubscribe();
    }
  }
}