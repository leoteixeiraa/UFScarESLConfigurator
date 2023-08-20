import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedDataService } from 'src/app/core/services/shared-data.service';

@Component({
  selector: 'app-generated-code',
  templateUrl: './generated-code.component.html',
  styleUrls: ['./generated-code.component.sass']
})
export class GeneratedCodeComponent implements OnInit, OnDestroy {

  public code: any = {};
  private unsubscribe$ = new Subject<void>();

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.formData$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(data => {
      this.code = data;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  copyCodeToClipboard() {
    const el = document.createElement('textarea');
    el.value = JSON.stringify(this.code, null, 2); // Formatação para JSON bonito
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

  }




}
