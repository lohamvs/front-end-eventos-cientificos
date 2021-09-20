import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoCreateComponent } from './artigo-create.component';

describe('ArtigoCreateComponent', () => {
  let component: ArtigoCreateComponent;
  let fixture: ComponentFixture<ArtigoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
