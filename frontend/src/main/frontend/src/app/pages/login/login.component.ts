import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Http }  from '@angular/http';
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
  show: boolean = false;

  constructor(
    private router: Router, 
    private toastService: ToastService, 
    private httpService: HttpService, 
    private formBuilder: FormBuilder,
    private translate:TranslateService) {
      let userNameFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
      let passwordFc = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
      this.loginForm = this.formBuilder.group({
        name: userNameFc,
        password: passwordFc
      });
  }

  /**
  * 初始化
  */
  ngOnInit() {}

  /**
   * 登录
   */
  login() {
    if (this.loginForm.valid) {
      let registerPostData = {
        name: null,
        password: null
      };
      Object.assign(registerPostData, this.loginForm.value);
      this.httpService.post("/v1/login", registerPostData, (successful, resData, res) => {
        let {code, msg, data} = resData;
        if(code === 200){
          this.toastService.toast(new ToastConfig(
            ToastType.SUCCESS, 
            '', 
            msg, 
            2000, 
            () => {
              this.router.navigate(['/app/home']);
            })
          );
        } else {
          this.toastService.toast(new ToastConfig(ToastType.WARNING, '', msg, 2000));
        }
      }, (errorful, msg, err) => {
        this.toastService.toast(new ToastConfig(ToastType.ERROR, '', msg, 2000));
      })

      // this.httpService.get('http://127.0.0.1:8033/8a15fbb94471050bb46f/test', null, (successful, resData, res) => {
      //   console.log(resData)
      // })
    }
  }

  /**
   * 注册
   */
  register(){
    if(!this.loginForm.valid){
      return;
    }
    let registerPostData = {
      name: null,
      password: null
    };
    Object.assign(registerPostData, this.loginForm.value);
    // this.httpService.post('/v1/user', registerPostData, (successful, resData, res) => {
    //   let {code, msg, data} = resData;
    //   if(code === 200){
    //     this.toastService.toast(new ToastConfig(
    //       ToastType.SUCCESS, 
    //       '', 
    //       msg, 
    //       2000, 
    //       () => {
    //         this.router.navigate(['/app/home']);
    //       })
    //     );
    //   } else {
    //     this.toastService.toast(new ToastConfig(ToastType.WARNING, '', msg, 2000));
    //   }
    // }, (errorful, msg, err) => {
    //   this.toastService.toast(new ToastConfig(ToastType.ERROR, '', msg, 2000));
    // })
  }

}