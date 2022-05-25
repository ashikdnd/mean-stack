import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from "@angular/material/menu";
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import { UpdateComponent } from './admin/manage-products/update/update.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    AddProductComponent,
    ReportsComponent,
    ManageProductsComponent,
    AdminComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
