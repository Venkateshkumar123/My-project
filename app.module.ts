import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { ActiongamesComponent } from './actiongames/actiongames.component';
import { OpenworldgamesComponent } from './openworldgames/openworldgames.component';
import { HorrorgamesComponent } from './horrorgames/horrorgames.component';
import { SimulationgamesComponent } from './simulationgames/simulationgames.component';
import { RacinggamesComponent } from './racinggames/racinggames.component';
import { AboutComponent } from './about/about.component';
import { GtavComponent } from './categories/gtav/gtav.component';
import { GgComponent } from './categories/gg/gg.component';
import { Gta4Component } from './categories/gta4/gta4.component';
import { CyberpunkComponent } from './categories/cyberpunk/cyberpunk.component';
import { CodComponent } from './categories/cod/cod.component';
import { Bussimulator21Component } from './categories/bussimulator21/bussimulator21.component';
import { ConstructionsimComponent } from './categories2/constructionsim/constructionsim.component';
import { FlightsimComponent } from './categories2/flightsim/flightsim.component';
import { ShipsimComponent } from './categories2/shipsim/shipsim.component';
import { RoadsimComponent } from './categories2/roadsim/roadsim.component';
import { TrainsimComponent } from './categories2/trainsim/trainsim.component';
import { GodofwarComponent } from './categories2/godofwar/godofwar.component';
// import { GuaroiansgalaxyComponent } from './categories/guaroiansgalaxy/guaroiansgalaxy.component';
// import { GpayComponent } from './gpay/gpay.component';
// import { GooglePayButtonModule } from '@google-pay/button-angular';




const routes:Routes = [
  {path:'',component:HomeComponent },
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'actiongames',component:ActiongamesComponent},
  {path:'openworldgames',component:OpenworldgamesComponent},
  {path:'horrorgames',component:HorrorgamesComponent},
  {path:'simulationgames',component:SimulationgamesComponent},
  {path:'racinggames',component:RacinggamesComponent},
  {path:'about',component:AboutComponent},
  {path:'gtav',component:GtavComponent},
  {path:'gg',component:GgComponent},
  {path:'gta4',component:Gta4Component},
  {path:'cyberpunk',component:CyberpunkComponent},
  {path:'cod',component:CodComponent},
  {path:'bussimulator21',component:Bussimulator21Component},
  {path:'constructionsim',component:ConstructionsimComponent},
  {path:'flightsim',component:FlightsimComponent},
  {path:'shipsim',component:ShipsimComponent},
  {path:'roadsim',component:RoadsimComponent},
  {path:'trainsim',component:TrainsimComponent},
  {path:'godofwar',component:GodofwarComponent},
  // {path:'gpay',component:GpayComponent},






]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
      ActiongamesComponent,
      OpenworldgamesComponent,
      HorrorgamesComponent,
      SimulationgamesComponent,
      RacinggamesComponent,
      AboutComponent,
      GgComponent,
      Gta4Component,
      CyberpunkComponent,
      CodComponent,
      Bussimulator21Component,
      ConstructionsimComponent,
      FlightsimComponent,
      ShipsimComponent,
      RoadsimComponent,
      TrainsimComponent,
      GodofwarComponent,
      // GpayComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
