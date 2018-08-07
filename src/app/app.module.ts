import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { 
  MatButtonModule,
  MatTabsModule,
  MatListModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OriginPathSelectorComponent } from './origin-path-selector/origin-path-selector.component';
import { CharacteristicsGeneratorComponent } from './characteristics-generator/characteristics-generator.component';

const modules = [
  MatButtonModule,
  MatTabsModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  HttpClientModule
];
@NgModule({
  declarations: [
    AppComponent,
    OriginPathSelectorComponent,
    CharacteristicsGeneratorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ...modules
  ],
  exports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
