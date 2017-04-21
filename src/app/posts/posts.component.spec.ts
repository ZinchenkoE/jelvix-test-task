import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule}              from "@angular/router/testing";
import {BrowserModule}                    from "@angular/platform-browser";
import {MaterialModule, MdButtonModule}   from "@angular/material";
import {BrowserAnimationsModule}          from "@angular/platform-browser/animations";
import {HttpModule}                       from "@angular/http";
import {DataService}                      from "../_shared/data.service";
import {PostsComponent}                   from './posts.component';

describe('PostsComponent', () => {
    let component: PostsComponent;
    let fixture: ComponentFixture<PostsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PostsComponent],
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
        fixture = TestBed.createComponent(PostsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
