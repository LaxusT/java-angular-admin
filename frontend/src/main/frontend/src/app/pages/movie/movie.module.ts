import { NgModule }   from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule,ReactiveFormsModule }        from '@angular/forms';
import { HttpModule }    from '@angular/http';

//第三方
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { ImageCropperModule } from 'ng2-img-cropper';
import { SelectModule } from 'angular2-select';
import { Select2Module } from 'ng2-select2';
import {FileUploadModule } from 'ng2-file-upload';
import {DpDatePickerModule} from 'ng2-date-picker';
import {AgGridModule} from "ag-grid-angular/main";

//自定义

//路由
import { MovieRoutingModule  } from './movie-routing';


import { MovieComponent } from './movie.component';
import { MovieListComponent } from './movieList/movie-list.component';







@NgModule({
  imports:      [
     CommonModule, 
     FormsModule,
     ReactiveFormsModule,
     HttpModule,
     NgbModule,
     NgxChartsModule,
     MultiselectDropdownModule,
     ImageCropperModule,
     SelectModule,
     Select2Module,
     FileUploadModule,
     MovieRoutingModule,
     DpDatePickerModule,
     AgGridModule.withComponents([])
  ],
  declarations: [
    MovieComponent,
    MovieListComponent
  ],
  exports:      [ 
  ],
  providers:    []
})
export class MovieModule { }
