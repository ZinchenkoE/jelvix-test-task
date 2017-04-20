import {Injectable} 	from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} 	from "rxjs";
import {User} 			from "./user";
import {Post} 			from "./post";
import {Comment} 		from "./comment";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
	rootUrl: string = 'https://jsonplaceholder.typicode.com';

	constructor(private http: Http) {
	}

	getUsers(): Observable<User[]> {
		let url = this.rootUrl + '/users';
		return this.http.get(url)
			.map((resp: Response) => {
				let usersRaw = resp.json();
				let users: User[] = [];

				if(!usersRaw.length) return users;
				usersRaw.forEach((userRaw) => {
					let user = new User(
						userRaw.id,
						userRaw.username,
						userRaw.email,
						userRaw.phone,
						userRaw.company.name
					);
					users.push(user);
				});
				return users;
			})
			.catch(this.errorHandler);
	}

	getUserById(userId: number): Observable<User> {
		let url = this.rootUrl + '/users/' + userId;
		return this.http.get(url)
			.map((resp: Response) => {
				let userRaw = resp.json();

				return new User(
					userRaw.id,
					userRaw.username,
					userRaw.email,
					userRaw.phone,
					userRaw.company.name
				);
			})
			.catch(this.errorHandler);
	}

	getPosts(userId: number): Observable<Post[]> {
		let url = this.rootUrl + '/posts?userId=' + userId;
		return this.http.get(url)
			.map((resp: Response) => {
				let postsRaw = resp.json();
				let posts: Post[] = [];

				if(!postsRaw.length) return posts;

				postsRaw.forEach((postRaw) => {
					let post = new Post(
						postRaw.userId,
						postRaw.id,
						postRaw.title,
						postRaw.body
					);
					posts.push(post);
				});
				return posts;
			})
			.catch(this.errorHandler);
	}

	getPostById(postId: number): Observable<Post> {
		let url = this.rootUrl + '/posts/' + postId;
		return this.http.get(url)
			.map((resp: Response) => {
				let postRaw = resp.json();
				return new Post(
					postRaw.userId,
					postRaw.id,
					postRaw.title,
					postRaw.body
				);
			})
			.catch(this.errorHandler);
	}

	getComments(postId: number): Observable<Comment[]> {
		let url = this.rootUrl + '/comments?postId=' + postId;
		return this.http.get(url)
			.map((resp: Response) => {
				let commentsRaw = resp.json();
				let comments: Comment[] = [];

				if(!commentsRaw.length) return comments;

				commentsRaw.forEach((commentRaw) => {
					let comment = new Comment(
						commentRaw.postId,
						commentRaw.id,
						commentRaw.name,
						commentRaw.email,
						commentRaw.body
					);
					comments.push(comment);
				});
				return comments;
			})
			.catch(this.errorHandler);
	}

	errorHandler(err) {
		console.error(err);
		return Observable.throw(err);
	}

}
