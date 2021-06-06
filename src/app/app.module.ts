import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RegistrationComponent } from './registration/registration.component';
import { PriceupdaterComponent } from './priceupdater/priceupdater.component';
import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [ //list of components part of this module
    AppComponent, LoginComponent,MenuComponent,ProductslistComponent,
    InventoryComponent,UserlistComponent,UserdetailsComponent,
    RegistrationComponent,PriceupdaterComponent,HeaderComponent,
    PagenotfoundComponent,
    
  ],
  imports: [ //list of modules used by this module
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Define which is the Root component
})
export class AppModule { }

