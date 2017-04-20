import {BrowserModule} 					from '@angular/platform-browser';
import {NgModule} 						from '@angular/core';
import {HttpModule} 					from '@angular/http';
import {MdButtonModule, MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} 		from "@angular/platform-browser/animations";
import {Routes, RouterModule} 			from "@angular/router";

import {AppComponent} 		  from './app.component';
import {UsersComponent} 	  from './users/users.component';
import {PostsComponent} 	  from './posts/posts.component';
import {CommentsComponent}    from './comments/comments.component';
import {DataService} 		  from "./_shared/data.service";

const appRoutes: Routes = [
	{path: 'users', component: UsersComponent},
	{path: 'posts/:userId', component: PostsComponent},
	{path: 'comments/:postId', component: CommentsComponent},
	{path: '**', redirectTo: '/users'}
];

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		PostsComponent,
		CommentsComponent
	],
	imports: [
		BrowserModule,
		MaterialModule,
		HttpModule,
		RouterModule.forRoot(appRoutes),
		MdButtonModule,
		BrowserAnimationsModule
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule {}
