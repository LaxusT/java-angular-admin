import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';


import { MovieComponent } from './movie.component';
import { MovieListComponent } from './movieList/movie-list.component';


/**
 * demo路由
 */
const demoRoutes: Routes = [
  {
    path: '',
    component: MovieComponent,
    children: [
      {
        path: 'movieList',
        component: MovieListComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(demoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MovieRoutingModule { }