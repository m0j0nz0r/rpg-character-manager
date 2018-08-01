import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsGeneratorComponent } from './characteristics-generator.component';

describe('CharacteristicsGeneratorComponent', () => {
  let component: CharacteristicsGeneratorComponent;
  let fixture: ComponentFixture<CharacteristicsGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacteristicsGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
