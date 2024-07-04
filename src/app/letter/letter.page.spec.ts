import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LetterPage } from './letter.page';

describe('LetterPage', () => {
  let component: LetterPage;
  let fixture: ComponentFixture<LetterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
