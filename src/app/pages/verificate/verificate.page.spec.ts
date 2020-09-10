import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerificatePage } from './verificate.page';

describe('VerificatePage', () => {
  let component: VerificatePage;
  let fixture: ComponentFixture<VerificatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
