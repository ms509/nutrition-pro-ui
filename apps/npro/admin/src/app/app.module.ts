import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent, LoginComponent, RegisterComponent } from './components';
import { AlertComponent } from './_directives';
import { HeaderComponent } from './components/shared';
import { FooterComponent } from './components/shared';
import { ListRecipesComponent } from './components/recipes';
import { AddRecipesComponent } from './components/recipes';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent, AlertComponent, HeaderComponent, FooterComponent, ListRecipesComponent, AddRecipesComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    HttpClientModule,
    routing
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
