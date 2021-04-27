import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultAppComponent } from './pages/default/default-app/default-app.component';
import { SecretAppComponent } from './pages/secret/secret-app/secret-app.component';

const routes: Routes = [
  {path: '', component: DefaultAppComponent},
  {path: 'secret', component: SecretAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
