import * as UseCases from './UseCases';

export const Routes = (useCase) => {

  switch (useCase) {
  case UseCases.POST_PDF :
    return ({
      method: 'POST',
      path: '/'
    });
    case UseCases.GET_ENTITIES :
    return ({
      method: 'GET',
      path: '/entities'
    });
  case UseCases.GET_PDF :
    return ({
      method: 'get'
    });
  case UseCases.REJECT_PDF :
    return ({
      method: 'DELETE',
      path: '/'
    });
  case UseCases.CONFIRM_PDF :
    return ({
      method: 'PUT',
      path: '/confirm'
    });

  default :
    return ({
      method: 'GET',
      path: '/'
    });

  }

};