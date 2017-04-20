import {Component, OnInit} from '@angular/core';
import {DataService} from "../_shared/data.service";
import {User} from "../_shared/user";

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
	users: User[] = [];

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.dataService.getUsers().subscribe(
			(users: User[]) => this.users = users
		);
	}

}
