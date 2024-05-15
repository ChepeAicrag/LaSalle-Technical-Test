import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: StudentsComponent }];

@NgModule({
  declarations: [StudentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
})
export class StudentsModule {}
