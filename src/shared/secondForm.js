export const secondForm =  {
  firstForm: [
    {
      type: 'text',
      value: 'aa',
      name: 'Nombre',
      required: true,
      label: 'Nombre',
      disabled : false,
      backName : 'name'
    },
    {
      type: 'text',
      label: 'Apellidos ',
      value: '',
      name: 'Apellidos',
      required: true,
      disabled : false,
      backName : 'lastName'

    },
    {
      type: 'text',
      value: '',
      name: 'DNI',
      required: true,
      label: 'dni',
      disabled : false,
      backName : 'dni'

    },
    {
      type: 'text',
      value: '',
      name: 'Correo electrónico',
      required: true,
      label: 'Correo electrónico',
      disabled : false,
      backName : 'email'

    },
    {
      type: 'text',
      value: '',
      name: 'Población',
      required: true,
      label: 'Población',
      disabled : false,
      backName : 'locality'
    },
    {
      type: 'checkbox',
      name: 'Representante Legal',
      required: false,
      value : 'titular',
      label: 'Representante Legal',
      disabled : false,
      backName : 'tutor',
      valueChecked : 'tutor',
      valueUnchecked : 'titular',
      options : [{
        value : 'titular',
        label : 'Persona física/juridica',
        name : 'Tutor',
        default : true,
        selected : true
      },
      {
        value : 'tutor',
        label : 'Tutor',
        name : 'Tutor',
        default : true,
        selected : true

      }]
    }
  ],
  secondForm:
    [
      {
        type: 'text',
        value: '',
        name: 'tutorName',
        required: false,
        label: 'Nombre',
        disabled : false,
        backName : 'tutorName'
      }, {
        type: 'text',
        value: '',
        name: 'tutorLastName',
        required: false,
        label: 'Apellidos',
        disabled : false,
        backName : 'tutorLastName'
      }, {
        type: 'text',
        value: '',
        name: 'tutorEmail',
        required: true,
        label: 'Correo Electrónico',
        disabled : false,
        backName : 'tutorEmail'
      }, {
        type: 'text',
        value: '',
        name: 'tutorDni',
        required: true,
        label: 'DNI ',
        disabled : false,
        backName : 'tutorDni'
      }
    ],



};
