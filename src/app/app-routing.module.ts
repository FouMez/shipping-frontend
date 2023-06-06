import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelFormComponent } from 'src/components/parcel-form/parcel-form.component';
import { ParcelListComponent } from 'src/components/parcel-list/parcel-list.component';

const routes: Routes = [
  { path: 'create', component: ParcelFormComponent },
  { path: 'list', component: ParcelListComponent },
  { path: '', redirectTo: 'create', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
