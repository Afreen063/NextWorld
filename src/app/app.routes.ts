import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManufaturerComponent } from './manufaturer/manufaturer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HelpUsComponent } from './help-us/help-us.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'manufaturer', component: ManufaturerComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'help', component: HelpUsComponent },
  { path: 'login_register', component: LoginRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
