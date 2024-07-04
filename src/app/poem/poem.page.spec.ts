import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoemPage } from './poem.page';

describe('PoemPage', () => {
  let component: PoemPage;
  let fixture: ComponentFixture<PoemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
