import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import mermaid from 'mermaid';
import { Subject, takeUntil } from 'rxjs';
import { SharedDataService } from 'src/app/core/services/shared-data.service';
import { WebDiagramPipe } from 'src/app/shared/pipes/web-diagram.pipe';
import { MobileDiagramPipe } from './../../shared/pipes/mobile-diagram.pipe';

@Component({
  selector: 'app-diagram-viewer',
  templateUrl: './diagram-viewer.component.html',
  styleUrls: ['./diagram-viewer.component.sass'],
})
export class DiagramViewerComponent implements AfterViewInit, OnDestroy, OnInit {
  private webDataSubscription: any;
  private mobileDataSubscription: any;
  private unsubscribe$ = new Subject<void>();

  public diagramWebMarkup: SafeHtml = '';
  public diagramMobileMarkup: SafeHtml = '';

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
    private webDiagramPipe: WebDiagramPipe,
    private mobileDiagramPipe: MobileDiagramPipe,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    mermaid.initialize(this.config);
  }

  ngAfterViewInit(): void {
    mermaid.initialize(this.config);

    this.webDataSubscription = this.sharedDataService
      .getFilteredDataForWeb()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.diagramWeb = this.webDiagramPipe.transform(data);
        console.log(this.diagramWeb);
        if (this.shouldRenderDiagramWeb()) {
          this.renderMermaidDiagram(this.diagramWeb, 'diagramWebMarkup');
        } else {
          this.diagramWebMarkup = '';
        }
        this.cdr.detectChanges();
      });

    this.mobileDataSubscription = this.sharedDataService
      .getFilteredDataForMobile()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.diagramMobile = this.mobileDiagramPipe.transform(data);
        console.log(this.diagramMobile);
        if (this.shouldRenderDiagramMobile()) {
          this.renderMermaidDiagram(this.diagramMobile, 'diagramMobileMarkup');
        } else {
          this.diagramMobileMarkup = '';
        }
        this.cdr.detectChanges();
      });
  }
  

  renderMermaidDiagram(diagramString: string, targetVariable: 'diagramWebMarkup' | 'diagramMobileMarkup'): void {
    this[targetVariable] = this.sanitizer.bypassSecurityTrustHtml(`
      <div class="mermaid">${diagramString}</div>
    `);

    // Assuma que o Mermaid vai renderizar corretamente quando o HTML for injetado
    setTimeout(() => {
      mermaid.init();
    }, 0);
  }

  private shouldRenderDiagramWeb(): boolean {
    // Checa se o diagramWeb contém mais do que apenas a classe padrão mobilePlatform
    return (this.diagramWeb.match(/class/g) || []).length > 2 && this.diagramWeb.length > 35;
  }
  private shouldRenderDiagramMobile(): boolean {
    // Checa se o diagramMobile contém mais do que apenas a classe padrão mobilePlatform
    return (this.diagramMobile.match(/class/g) || []).length > 2 && this.diagramMobile.length > 38;
  }

  onTabChanged(): void {
    setTimeout(() => {
      mermaid.init();
    }, 0);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // No seu componente
  hasContent(value: string): boolean {
    return value.trim() !== '';
  }

}
