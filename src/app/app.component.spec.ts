import {TestBed, async}                 from '@angular/core/testing';
import {RouterTestingModule}            from "@angular/router/testing";
import {BrowserModule}                  from "@angular/platform-browser";
import {MaterialModule, MdButtonModule} from "@angular/material";
import {HttpModule}                     from "@angular/http";
import {BrowserAnimationsModule}        from "@angular/platform-browser/animations";
import {AppComponent}                   from './app.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                RouterTestingModule,
                BrowserModule,
                MaterialModule,
                HttpModule,
                MdButtonModule,
                BrowserAnimationsModule
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'Jelvix test task'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Jelvix test task');
    }));

    it('should render title in a .logo tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.logo').textContent).toContain('Jelvix test task');
    }));
});
