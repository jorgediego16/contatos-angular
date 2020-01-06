import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosListagemComponentComponent } from './contatos-listagem-component.component';

describe('ContatosListagemComponentComponent', () => {
  let component: ContatosListagemComponentComponent;
  let fixture: ComponentFixture<ContatosListagemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosListagemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosListagemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
