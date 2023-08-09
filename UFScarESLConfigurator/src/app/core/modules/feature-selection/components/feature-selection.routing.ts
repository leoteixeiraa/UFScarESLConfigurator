import { Routes, RouterModule } from '@angular/router';
import { FeatureFormComponent } from 'src/app/modules/feature-selection/components/feature-form/feature-form.component';

const routes: Routes = [
  { path: '', component: FeatureFormComponent }
];

export const FeatureSelectionRoutes = RouterModule.forChild(routes);
