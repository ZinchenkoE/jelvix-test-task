import {Component, OnInit} from '@angular/core';
import {ActivatedRoute}    from "@angular/router";
import {DataService} 	   from "../_shared/data.service";
import {Post} 			   from "../_shared/post";
import {User} 			   from "../_shared/user";

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
	posts: Post[] = [];
	user: User;
	userId: number;

	constructor(
		private dataService: DataService,
		private activateRoute: ActivatedRoute
	) {
		this.userId = this.activateRoute.snapshot.params['userId'];
	}

	ngOnInit() {
		this.dataService.getUserById(this.userId).subscribe(
			(user: User) => this.user = user
		);
		this.dataService.getPosts(this.userId).subscribe(
			(posts: Post[]) => this.posts = posts
		);
	}

}
