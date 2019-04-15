export const secondForm =  {
  firstForm: [
    {
      type: 'text',
      value: 'aa',
      name: 'Nombre',
      required: true,
      label: 'Nombre',
      disabled : false,
      backName : 'name',
      errorText : 'El nombre solo debe contener letras',
      regexp : '^[a-zA-Z]+$',
    },
    {
      type: 'text',
      label: 'Apellidos ',
      errorText : 'Los apellidos  solo deben conter letras',
      regexp : '^[a-zA-Z]+$',
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
      errorText : '8 dígitos seguidos una letra',
      regexp : '^[0-9]{8,8}[A-Za-z]$',
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
      errorText : 'Debe ser un email válido',
      regexp : /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/,
      label: 'Correo electrónico',
      disabled : false,
      backName : 'email'

    },
    {
      type: 'text',
      value: '',
      name: 'Población',
      errorText : 'Solo debe conter letras',
      regexp : '^[a-zA-Z]+$',
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
        errorText : 'Solo debe conter letras',
        regexp : '^[a-zA-Z]+$',
        required: false,
        label: 'Nombre',
        disabled : false,
        backName : 'tutorName'
      }, {
        type: 'text',
        value: '',
        name: 'tutorLastName',
        errorText : 'Solo debe conter letras',
        regexp : '^[a-zA-Z]+$',
        required: false,
        label: 'Apellidos',
        disabled : false,
        backName : 'tutorLastName'
      }, {
        type: 'text',
        value: '',
        name: 'tutorEmail',
        required: true,
        errorText : 'Debe ser un email válido',
        regexp : /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/,
        label: 'Correo Electrónico',
        disabled : false,
        backName : 'tutorEmail'
      }, {
        type: 'text',
        value: '',
        name: 'tutorDni',
        errorText : '8 dígitos seguidos una letra',
        regexp : '^[0-9]{8,8}[A-Za-z]$',
        required: true,
        label: 'DNI ',
        disabled : false,
        backName : 'tutorDni'
      }
    ],



};
