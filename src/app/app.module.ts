import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './adminlte/header/header.component';
import { SidebarComponent } from './adminlte/sidebar/sidebar.component';
import { FooterComponent } from './adminlte/footer/footer.component';
import { ContentComponent } from './adminlte/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
