import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesTagComponent } from './names-tag.component';

describe('NamesTagComponent', () => {
  let component: NamesTagComponent;
  let fixture: ComponentFixture<NamesTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
