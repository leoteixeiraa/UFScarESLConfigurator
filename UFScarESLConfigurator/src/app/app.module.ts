import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DiagramViewerComponent } from './modules/diagram-viewer/diagram-viewer.component';
import { FeatureFormComponent } from './modules/feature-selection/feature-form/feature-form.component';
import { GeneratedCodeComponent } from './modules/generated-code/generated-code/generated-code.component';
import { FeatureStepperComponent } from './shared/components/feature-stepper/feature-stepper.component';
import { TopMenuComponent } from './shared/components/top-menu/top-menu.component';
import { WebDiagramPipe } from './shared/pipes/web-diagram.pipe';
import { MobileDiagramPipe } from './shared/pipes/mobile-diagram.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeatureFormComponent,
    GeneratedCodeComponent,
    TopMenuComponent,
    FeatureStepperComponent,
    DiagramViewerComponent,
    WebDiagramPipe,
    MobileDiagramPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatTabsModule,
  ],
  providers: [WebDiagramPipe, MobileDiagramPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
