import { NgModule }      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule, Http, XHRBackend, RequestOptions }    from '@angular/http';
import { TranslateService } from '../../node_modules/ng2-translate';


//app
import { AppComponent }    from './app.component';
import { AppService }   from './app.service';
import { PageNotFoundComponent } from './pages/error-page/page-not-found.component';


//toast
import {ToastService} from './components/toast/toast.service';
import {ToastBoxComponent} from './components/toast/toast-box.component';
import {ToastComponent} from './components/toast/toast.component';

//http
import { HttpService } from './services/http/http.service';
import { HttpInterceptorService }   from './services/http/http.service2';

 export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions){
   let service = new HttpInterceptorService(xhrBackend, requestOptions);
   return service;
 }



//storage
import { LocalStorageService } from './services/storage/local-storage.service';
import { SessionStorageService } from './services/storage/session-storage.service';

//modules
import  { AppRoutingModule } from './app-routing.module';

//strategy
import { SelectivePreloadingStrategy } from "./selective-preloading-strategy";

//translate
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";

/**
 * app模块
 */
@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ToastBoxComponent,
    ToastComponent,
    PageNotFoundComponent
  ],
  providers: [
    AppService,
    ToastService,
    HttpService,
    // HttpInterceptorService,
    // {
    //   provide: Http,
    //   useFactory: interceptorFactory,
    //   deps: [XHRBackend, RequestOptions]
    // },
    LocalStorageService,
    SessionStorageService,
    SelectivePreloadingStrategy,
    TranslateService
  ],
  exports:[
    ToastBoxComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}