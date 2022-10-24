import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFrameComponent } from './test-all/main-frame/main-frame.component';
import { TestAllComponent } from './test-all/test-all.component';
import { TestOneComponent } from './test-all/test-one/test-one.component';
import { TestTwoComponent } from './test-all/test-two/test-two.component';

const routes: Routes = [
  {path: '', component: TestAllComponent},
  {
    path: 'main/:id', component: MainFrameComponent,
    children: [
        { path: 'sub-one', component: TestOneComponent },
        { path: 'sub-two', component: TestTwoComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
