import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ArchiveComponent } from './archive/archive.component';
import { GithubFollowersService } from './services/github-followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component'; 
import { NoAccessComponent } from './no-access/no-access.component';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    ArchiveComponent,
    NoAccessComponent,
    LoginComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

        
    RouterModule.forRoot([     //use this to root routes for our Application
      {
        path:'', component: HomeComponent 
      },
      {
       path:'admin', component: AdminComponent , canActivate: [AuthGuard, AdminAuthGuard]
      },
      {
       path:'login', component: LoginComponent 
      },
      {
        path:'no-access', component: NoAccessComponent 
      }
      
   ]) 
    
  //   RouterModule.forRoot([     //use this to root routes for our Application
  //     {
  //       path:'', component: HomeComponent 
  //     },
  //     {
  //      path:'archive/:year/:month', component: ArchiveComponent 
  //     },
  //     {
  //      path:'**', component: NotFoundComponent 
  //     }
      
  //  ])  
//    RouterModule.forRoot([     //use this to root routes for our Application
//     {
//       path:'', component: HomeComponent 
//     },
//     {
//      path:'followers/:username/:id', component: GithubProfileComponent 
//     },
//     {
//      path:'followers', component: GithubFollowersComponent 
//     },
//     {
//      path:'posts', component: PostsComponent 
//     },
//     {
//      path:'**', component: NotFoundComponent 
//     }
    
//  ])  

  ],
  providers: [
    OrderService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,

    // For creating a Mock back-end. We don't need these files in Real World App
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,

    PostService,
    CoursesService,
    AuthorsService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
