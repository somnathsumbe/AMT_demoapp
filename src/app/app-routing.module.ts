import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormComponent } from './form/form.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { RagisterComponent } from './ragister/ragister.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { BacktosearchComponent } from './backtosearch/backtosearch.component';
import { ChangepinComponent } from './changepin/changepin.component';
import { ConfirmRagistrationComponent } from './confirm-ragistration/confirm-ragistration.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { JavascriptComponent } from './javascript/javascript.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'javascript', component: JavascriptComponent },

  {
    path: 'demo',
    children:[
      { path: '', component: DemoComponent},
      { path: 'login', component: LoginComponent },
      { path: 'forms', component: FormComponent },
      { path: '**', component: NotfoundComponent }
    ]
  },

  { path: 'ragister', component: RagisterComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'ConfirmRagistration/:id', component: ConfirmRagistrationComponent },
  { path: 'Changepin/:id', component: ChangepinComponent },
  { path: 'profileupdate', component: ProfileupdateComponent },
  { path: 'backtosearch', component: BacktosearchComponent },
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }