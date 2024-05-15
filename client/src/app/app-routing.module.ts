import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormModule } from './form/form.module';
import { PATHS_VIEW } from './constants/paths.constants';
import { StudentsModule } from './students/students.module';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: `${PATHS_VIEW.form}` },
  {
    path: `${PATHS_VIEW.form}`,
    loadChildren: () => import('./form/form.module').then((m) => m.FormModule),
  },
  {
    path: `${PATHS_VIEW.students}`,
    loadChildren: () =>
      import('./students/students.module').then((m) => m.StudentsModule),
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormModule,
    StudentsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
