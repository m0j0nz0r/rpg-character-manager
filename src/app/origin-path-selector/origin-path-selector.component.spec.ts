import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginPathSelectorComponent } from './origin-path-selector.component';

describe('OriginPathSelectorComponent', () => {
  let component: OriginPathSelectorComponent;
  let fixture: ComponentFixture<OriginPathSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginPathSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginPathSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
