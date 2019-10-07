import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* 9 import forms module*/ 
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent} from './components/header/header.component';

import { ContentComponent} from './components/content/content.component';

import { FooterComponent } from './components/footer/footer.component';

import { DirectivaIfComponent} from './components/directivas/directiva-if.component'

import { DirectivaForComponent} from './components/directivas/directiva-for.component'

import { DirectivaSwitchComponent} from './components/directivas/directiva-switch.component'

import { DataService } from './services/datos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    DirectivaIfComponent,
    DirectivaForComponent,
    DirectivaSwitchComponent,
    

  ],
  imports: [
    BrowserModule,
   /*  9  FormsModule*/
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
