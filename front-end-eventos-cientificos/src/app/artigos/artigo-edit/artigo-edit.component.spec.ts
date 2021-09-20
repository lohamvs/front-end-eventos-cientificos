import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoEditComponent } from './artigo-edit.component';

describe('ArtigoEditComponent', () => {
  let component: ArtigoEditComponent;
  let fixture: ComponentFixture<ArtigoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
