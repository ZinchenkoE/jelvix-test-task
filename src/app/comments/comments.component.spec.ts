import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule, MdButtonModule}   from "@angular/material";
import {RouterTestingModule}              from "@angular/router/testing";
import {BrowserModule}                    from "@angular/platform-browser";
import {HttpModule}                       from "@angular/http";
import {BrowserAnimationsModule}          from "@angular/platform-browser/animations";
import {DataService}                      from "../_shared/data.service";
import {CommentsComponent}                from './comments.component';

describe('CommentsComponent', () => {
    let component: CommentsComponent;
    let fixture: ComponentFixture<CommentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommentsComponent],
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
        fixture = TestBed.createComponent(CommentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
