import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatSnackBarModule } from '@angular/material';
import { UpdateService } from './services/update.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [MatSnackBarModule],
      providers: [UpdateService],
    }).compileComponents();
  }));

  it('should create the app', 
     async(
      inject([
          UpdateService], 
            (updateService: UpdateService) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })));

  it(`should have as title 'AngTest'`, 
     async(
    inject([
      UpdateService], 
           (updateService: UpdateService) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular, Travis CI & Firebase Hosting');
  })));

  it('should render title in a h1 tag', 
     async(
    inject([
      UpdateService], 
           (updateService: UpdateService) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular, Travis CI & Firebase Hosting');
  })));
});
