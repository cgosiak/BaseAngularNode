import { BrowserModule }                    from '@angular/platform-browser';
import { ROUTES }                           from '../routing/routes';
import { RouterModule }                     from "@angular/router";
import { NgModule }                         from '@angular/core';
import { FormsModule }                      from '@angular/forms';
import { HttpModule, JsonpModule }          from '@angular/http';
import { AppComponent }                     from '../components/app.component';
import { ErrorComponent }                   from '../components/error.component';
import { HomeComponent }                    from '../components/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
