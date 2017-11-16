import { Injectable } from '@angular/core';
import {
    Http, Response, Headers, ConnectionBackend, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod
} from '@angular/http';
import { Utils } from "./../../util/utils";
import 'rxjs/Rx';

import { Interceptor, InterceptedRequest, InterceptedResponse, InterceptorService } 
from 'ng2-interceptors';

import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

/**
 * http服务
 */
@Injectable()
export class HttpService {
    private domain : string = '';

    constructor(
        private http: Http,
        private router: Router) {
        this.domain = environment.production ? '' : 'http://127.0.0.1:8080';
    }

    // constructor(private http: Http, backend: ConnectionBackend, defaultOptions: RequestOptions) {
    //     super(backend, defaultOptions);
    //     this.domain = environment.production ? '' : 'http://127.0.0.1:8080';
    // }

    public request(url: string, options: RequestOptionsArgs, success: Function, error: Function): any {
        this.http.request(this.domain + url, options).subscribe(res => {
            console.log(res.json())
            if(res.json().code === 205){
                this.router.navigate(['/login']);
                return;
            }
            success(res.ok, res.json(), res);
        }, err => {
            //处理请求失败
            let msg = this.requestFailed(url, options, err);
            error(err.ok, msg, err);
        });

    }

    public get(url: string, paramMap: any = null, success: Function=function(successful, data, res){}, error: Function=function(successful, msg, err){}): any {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Get,
            withCredentials: true,
            search: HttpService.buildURLSearchParams(paramMap)
        }), success, error);
    }

    public post(url: string, body: any = null, success: Function=function(successful, data, res){}, error: Function=function(successful, msg, err){}): any {

        return this.request(url, new RequestOptions({
            method: RequestMethod.Post,
            body: body,
            withCredentials: true,
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }), success, error);
    }

    public postFormData(url: string, paramMap: any = null, success: Function=function(successful, data, res){}, error: Function=function(successful, msg, err){}): any {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Post,
            search: HttpService.buildURLSearchParams(paramMap).toString(),
            withCredentials: true,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        }), success, error);
    }

    public put(url: string, body: any = null, success: Function=function(successful, data, res){}, error: Function=function(successful, msg, err){}): any {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Put,
            withCredentials: true,
            body: body
        }), success, error);
    }

    public delete(url: string, paramMap: any = null, success: Function=function(successful, data, res){}, error: Function=function(successful, msg, err){}): any {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Delete,
            withCredentials: true,
            search: HttpService.buildURLSearchParams(paramMap).toString()
        }), success, error);
    }

    public patch(url: string, body: any = null, success: Function=function(successful, data, res){}, error: Function=function(successful, msg, err){}): any {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Patch,
            withCredentials: true,
            body: body
        }), success, error);
    }

    public head(url: string, paramMap: any = null, success: Function=function(successful, data, res){}, error: Function=function(successful, msg, err){}): any {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Head,
            withCredentials: true,
            search: HttpService.buildURLSearchParams(paramMap).toString()
        }), success, error);
    }

    public options(url: string, paramMap: any = null, success: Function=function(successful, data, res){}, error: Function=function(successful, msg, err){}): any {
        return this.request(url, new RequestOptions({
            method: RequestMethod.Options,
            withCredentials: true,
            search: HttpService.buildURLSearchParams(paramMap).toString()
        }), success, error);
    }

    /**
     * 将对象转为查询参数
     * @param paramMap
     * @returns {URLSearchParams}
     */
    private static buildURLSearchParams(paramMap): URLSearchParams {
        let params = new URLSearchParams();
        if (!paramMap) {
            return params;
        }
        for (let key in paramMap) {
            let val = paramMap[key];
            if (val instanceof Date) {
                val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
            }
            params.set(key, val);
        }
        return params;
    }

    /**
     * 处理请求失败事件
     * @param url
     * @param options
     * @param err
     */
    private requestFailed(url: string, options: RequestOptionsArgs, err) {
        let msg = '请求发生异常', status = err.status;
        if (status === 0) {
            msg = '请求失败，请求响应出错';
        } else if (status === 404) {
            msg = '请求失败，未找到请求地址';
        } else if (status === 500) {
            msg = '请求失败，服务器出错，请稍后再试';
        } else {
            msg = "未知错误，请检查网络";
        }
        return msg;
    }

    /**
     * http返回值拦截器
     */
    public interceptAfter(response: InterceptedResponse): InterceptedResponse {
        console.log('这是登录拦截器')
        return response;
    }

    intercept(observable: Observable < Response > ): Observable < Response > {
        console.log("after...");
        return observable.catch((err, source) => {
          if (err.status<200 || err.status>=300) {
            alert('网络错误:'+err.status+' - ');
            return Observable.empty();
          } else {
            return Observable.throw(err);
          }
        });
    }

   
}