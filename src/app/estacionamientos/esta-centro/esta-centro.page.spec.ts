import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstaCentroPage } from './esta-centro.page';

describe('EstaCentroPage', () => {
  let component: EstaCentroPage;
  let fixture: ComponentFixture<EstaCentroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstaCentroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
