import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserModule}                    from "@angular/platform-browser";
import {HttpModule}                       from "@angular/http";
import {BrowserAnimationsModule}          from "@angular/platform-browser/animations";
import {RouterTestingModule}              from "@angular/router/testing";
import {MaterialModule, MdButtonModule}   from "@angular/material";
import {DataService}                      from "../_shared/data.service";
import {UsersComponent}                   from './users.component';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UsersComponent],
            imports: [
                RouterTestingModule,
                BrowserModule,
                MaterialModule,
                HttpModule,
                MdButtonModule,
                BrowserAnimationsModule
            ],
            providers: [DataService],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should has not empty users array', () => {
        component.ngOnInit();
        console.log(component);
        expect(component.users.length).toBeGreaterThan(0);
    });

});

