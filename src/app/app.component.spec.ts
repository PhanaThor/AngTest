import { TestBed, async, inject } from '@angular/core/testing';	
import { AppComponent } from './app.component';	

describe('AppComponent', () => {	
  beforeEach(async(() => {	
    TestBed.configureTestingModule({	
      declarations: [	
        AppComponent	
      ],	
    }).compileComponents();	
  }));	

  it('should create the app', () => {	
    const fixture = TestBed.createComponent(AppComponent);	
    const app = fixture.debugElement.componentInstance;	
    expect(app).toBeTruthy();	
  });	

  it(`should have as title 'AngTest'`, () => {	
    const fixture = TestBed.createComponent(AppComponent);	
    const app = fixture.debugElement.componentInstance;	
    expect(app.title).toEqual('Angular, Travis CI & Firebase Hosting');	
  });	

  it('should render title in a h1 tag', () => {	
    const fixture = TestBed.createComponent(AppComponent);	
    fixture.detectChanges();	
    const compiled = fixture.debugElement.nativeElement;	
    expect(compiled.querySelector('h1').textContent).toContain('Angular, Travis CI & Firebase Hosting');	
  });	
});
