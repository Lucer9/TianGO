import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewhomePage } from './newhome.page';

describe('NewhomePage', () => {
  let component: NewhomePage;
  let fixture: ComponentFixture<NewhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewhomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
