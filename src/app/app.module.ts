import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-components';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { RegionSelectorComponent } from './region-selector/region-selector.component';
import { InstallListComponent } from './install-list/install-list.component';
import { InstallDetailsComponent } from './install-details/install-details.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    DateSelectorComponent,
    RegionSelectorComponent,
    InstallListComponent,
    InstallDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
