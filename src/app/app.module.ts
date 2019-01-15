import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './products/products.component';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsGuard } from '../app/product-details.guard';
import { FilterPipe } from './shared/filter.pipe';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { RagisterComponent } from './ragister/ragister.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ConfirmRagistrationComponent } from './confirm-ragistration/confirm-ragistration.component';
import { GlobalsService } from './services/globals.service';
import { ChangepinComponent } from './changepin/changepin.component';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { BacktosearchComponent } from './backtosearch/backtosearch.component';
import { DemoComponent } from './demo/demo.component';
import { DemoService } from './demo/demo.service';
import { SummaryPipe } from './demo/summary.pipe';
import { AppRoutingModule } from './app-routing.module';
import { JavascriptComponent } from './javascript/javascript.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent,
    NotfoundComponent,
    FilterPipe,
    FormComponent,
    LoginComponent,
    RagisterComponent,
    DashbordComponent,
    ConfirmRagistrationComponent,
    ChangepinComponent,
    ProfileupdateComponent,
    BacktosearchComponent,
    DemoComponent,
    SummaryPipe,
    JavascriptComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CustomFormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers:[ProductService,GlobalsService,DemoService]
})
export class AppModule { }
