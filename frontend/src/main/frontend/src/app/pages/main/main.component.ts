import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { MainData } from '../main/main-model';
import { ModalService } from './../../components/modal/modal.service';
import { ConfirmConfig } from './../../components/modal/modal-model';

import { AvatarCropperComponent } from './../../components/user/avatar-cropper.component';
import { PasswordEditComponent } from './../../components/user/password-edit.component';
import { AppService } from './../../app.service';

/**
 * 主体组件
 */
@Component({
  selector: 'c-main',
  templateUrl: './main.component.html',
  styleUrls: ['.//main.component.scss']
})
export class MainComponent implements OnInit {

  //切换导航
  toggleDescTip: string = "点击关闭导航菜单";

  //切换导航标识
  navClose: boolean = false;

  //用户数据
  mainData: MainData = {
    userData: {
      userName: "百变小咖",
      userAvatar: "./assets/img/user-header.png",
      mobilePhone: "1895090***2",
      email: "332557712@qq.com",
      positions: "Java工程师、打杂工程师",
    },
    menuData: [
    {
      "id": "20",
      "parentId": "0",
      "name": "权限管理",
      "keyWord": "qxgl",
      "icon": 'fa-user',
      "isExpend": false,
      "children": [{
        "id": "21",
        "parentId": "20",
        "name": "用户管理",
        "keyWord": "yhgl",
        "icon": "fa-user-circle-o",
        "isExpend": false,
        "children": [{
          "id": "22",
          "parentId": "21",
          "name": "用户添加",
          "keyWord": "yhtj",
          "icon": "fa-pencil-square-o",
          "url": "/app/user/userAdd"
        }, {
          "id": "23",
          "parentId": "21",
          "name": "用户列表",
          "keyWord": "yhlb",
          "icon": "fa-list-alt",
          "url": "/app/user/userList"
        }]
      }, {
        "id": "24",
        "parentId": "20",
        "name": "角色管理",
        "keyWord": "jsgl",
        "icon": "fa-users",
        "children": [{
          "id": "25",
          "parentId": "24",
          "name": "角色添加",
          "keyWord": "jstj",
          "icon": "fa-plus-circle",
          "url": "/app/role/roleAdd"
        }, {
          "id": "26",
          "parentId": "24",
          "name": "角色查询",
          "keyWord": "jscx",
          "icon": "fa-search",
          "url": "/app/role/roleList"
        }, {
          "id": "27",
          "parentId": "24",
          "name": "角色分配",
          "keyWord": "jsfp",
          "icon": "fa-cogs",
          "url": "/app/role/roleDis"
        }]
      }, {
        "id": "28",
        "parentId": "20",
        "name": "菜单管理",
        "keyWord": "cdgl",
        "icon": "fa-tree",
        "children": [{
          "id": "29",
          "parentId": "28",
          "name": "菜单添加",
          "keyWord": "cdtj",
          "icon": "fa-plus-circle",
          "url": "menuAdd"
        }, {
          "id": "30",
          "parentId": "28",
          "name": "菜单查询",
          "keyWord": "cdcx",
          "icon": "fa-search",
          "url": "menuList"
        }]
      }]
    }, {
      "id": "31",
      "parentId": "0",
      "name": "系统管理",
      "keyWord": "txgl",
      "icon": "fa-cube",
      "children": [{
        "id": "32",
        "parentId": "32",
        "name": "系统日志",
        "keyWord": "xtrz",
        "icon": "fa-file",
        "url": "systemLog"
      }]
    }]
  }

  title: string = "首页";


  constructor(private router: Router, private modalService: ModalService, private ngbModalService: NgbModal, private appService: AppService) {
    this.appService.titleEventEmitter.subscribe((value: string) => {
      if (value) {
        this.title = value;
      }
    })
  }


  /**
   * 初始化
   */
  ngOnInit() {
  }

  /**
    * 切换导航
   */
  toggleNav() {
    this.navClose = !this.navClose;
    if (this.navClose) {
      this.toggleDescTip = "点击展开导航菜单";
    } else {
      this.toggleDescTip = "点击关闭导航菜单";
    }
  }

  /**
   * 跳转首页
   */
  toHome() {
    this.title = "首页";
    this.router.navigate(['/app/home']);
  }

  /**
   * 个人资料
   */
  userInfo() {
    this.router.navigate(['/app/user/userInfo']);
  }

  /**
   * 头像更换
   */
  avatarReplacement() {
    this.ngbModalService.open(AvatarCropperComponent, { size: 'lg', backdrop: 'static', keyboard: false }).result.then((result) => {

    }, (reason) => {

    });
  }

  /**
   * 修改密码
   */
  passwordEdit() {
    this.ngbModalService.open(PasswordEditComponent, { size: 'lg' }).result.then((result) => {

    }, (reason) => {

    });
  }


  /**
   * 退出系统
   */
  exitSys() {
    let exitSysCfg = new ConfirmConfig('您确定退出系统吗？');
    this.modalService.confirm(exitSysCfg).then((result) => {
      if (result.status == "approved") {
        this.router.navigate(['/login']);
      }
    }, (reason) => {
    });
  }





}


