import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultAppComponent } from './default-app/default-app.component';
import { SecretAppComponent } from './secret-app/secret-app.component';

const routes: Routes = [
  {path: 'default-app', component: DefaultAppComponent},
  {path: 'secret-app', component: SecretAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
