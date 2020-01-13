import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ContainerComponent} from '../container/container.component'
import {ItemComponent} from '../item/item.component'
import {SidebarComponent} from '../sidebar/sidebar.component'
import {TopbarComponent} from '../topbar/topbar.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule  ],
  declarations: [ AppComponent ,ContainerComponent,ItemComponent,SidebarComponent,
     TopbarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
