import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListPage } from './character-list.page';

describe('CharacterListPage', () => {
  let component: CharacterListPage;
  let fixture: ComponentFixture<CharacterListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterListPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
