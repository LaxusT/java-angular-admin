import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { HttpService } from './../../services/http/http.service';
import { CustomValidators } from './../../services/custom-validator/custom-validator';

import { ToastService } from './../../components/toast/toast.service';
import { ToastConfig, ToastType } from './../../components/toast/toast-model';

import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router, 
    private toastService: ToastService, 
    private httpService: HttpService, 
    private formBuilder: FormBuilder,
    private translate:TranslateService) {
      let userNameFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
      let passwordFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));

      this.loginForm = this.formBuilder.group({
        userName: userNameFc,
        password: passwordFc
      });
  }

  /**
  * 初始化
  */
  ngOnInit() {

  }

  /**
   * 登录
   */
  login() {
    console.info(this.loginForm);
    if (this.loginForm.valid) {
      let that = this;
      /*this.httpService.post("http://192.168.1.107:8080/cjhme/user/login.jhtml", {
        userName: 'admin',
        password: '123456'
      }, function (successful, data, res) {
        console.info(successful);
        console.info(data);
        console.info(res);
        if (successful) {
          const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '百变小咖，登录成功!', 3000);
          that.toastService.toast(toastCfg);
          that.router.navigate(['/app/home']);
        }
      }, function (successful, msg, err) {
         const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
         that.toastService.toast(toastCfg);
      });*/

      this.httpService.get("http://127.0.0.1:8080/v1/movie/list?start=1&end=2", null, (successful, data, res) => {
        console.log(successful);
        console.log(data);
        console.log(res)
      }, (errorful, msg, err) => {
        console.log(errorful);
        console.log(msg);
        console.log(err);
      })


      // const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '百变小咖，登录成功!', 2000);
      // this.toastService.toast(toastCfg);
      // this.router.navigate(['/app/home']);

    }
  }


}