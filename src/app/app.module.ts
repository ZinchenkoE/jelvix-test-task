import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {CommentsComponent} from './comments/comments.component';
import {DataService} from "./_shared/data.service";
import {Routes, RouterModule} from "@angular/router";

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
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes),
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
