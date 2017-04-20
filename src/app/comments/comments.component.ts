import {Component, OnInit} 	from '@angular/core';
import {ActivatedRoute} 	from "@angular/router";
import {DataService} 		from "../_shared/data.service";
import {Post} 				from "../_shared/post";
import {Comment} 			from "../_shared/comment";

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html',
	styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
	post: Post;
	comments: Comment[] = [];
	postId: number;

	constructor(
		private dataService: DataService,
		private activateRoute: ActivatedRoute
	) {
		this.postId = this.activateRoute.snapshot.params['postId'];
	}

	ngOnInit() {
		this.dataService.getPostById(this.postId).subscribe(
			(post: Post) => this.post = post
		);
		this.dataService.getComments(this.postId).subscribe(
			(comments: Comment[]) => this.comments = comments
		);
	}

}
