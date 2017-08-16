import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ChildComponent } from './components/child.component';
// import { SampleComponent } from './components/sample.component';
import { AppComponent } from './app.component';

// import {SampleModule, ChildComponent, SampleComponent} from 'my-angular-library';

import {SampleModule} from 'my-angular-library-custom';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
