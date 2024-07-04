import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstDatePage } from './first-date.page';

describe('FirstDatePage', () => {
  let component: FirstDatePage;
  let fixture: ComponentFixture<FirstDatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
