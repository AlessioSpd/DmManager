import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResizableContainer } from './resizable-container';

describe('ResizableContainer', () => {
  let component: ResizableContainer;
  let fixture: ComponentFixture<ResizableContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResizableContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(ResizableContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
