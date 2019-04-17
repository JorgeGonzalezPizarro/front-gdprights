import * as UseCases from './UseCases';

export const Routes = (useCase) => {

  switch (useCase) {
  case UseCases.CREATE_USER_DEMAND :
    return ({
      method: 'POST',
      path: '/'
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