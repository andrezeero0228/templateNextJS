import meuReducer, { initialState } from '../../reducers/meuReducer';
import { SELECIONAR_ALGO } from '../../actions/actionsConstants';

describe('Teste (./src/reducers/meuReducer)', () => {
  const state = {
    meuEstado: null,
         }
    } 
  };
  const Bla = {
    Propriedade: 'bla'
  };

  test('Estado inicial', () => {
    const newState = meuReducer(undefined, { type: '', payload: undefined });
    expect(newState).toEqual(initialState);
  }); }

  describe('case SELECIONAR_ALGO', () => {
    test('teste', () => {
      const newState = meuReducer(state, {
        type: SELECIONAR_ALGO,
        payload: { bla: Bla}
      });
      expect(newState).toEqual({ ...state, bla:Bla });
    });










(children > page ) arvore dos componentes > container (conecta com redux p pegar dados /funcoes operations ) > operation(faz chamadas manager + dispatch actions) > action(conecta reducer) > reducer(atualiza redux)
                                                                                                                                                                  > manager(regras de negocio)> service (chamada http)
