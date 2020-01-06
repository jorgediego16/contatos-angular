import { TestBed } from '@angular/core/testing';

import { ContatosListagemService } from './contatos-listagem.service';

describe('ContatosListagemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContatosListagemService = TestBed.get(ContatosListagemService);
    expect(service).toBeTruthy();
  });
});
