export const firstForm =  {
  firstForm: [
    {
      type: 'text',
      value: 'aa',
      name: 'customEntityName',
      required: true,
      errorText : 'El nombre es requerido y solo debe conter letras',
      regexp : '^[a-zA-Z]+$' ,
      label: 'Nombre',
      disabled : false,
      backName : 'customEntityName'
    },
    {
      type: 'text',
      label: 'Email ',
      errorText : 'Debe ser un email válido',
      regexp : /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/,
      value: '',
      name: 'customEntityEmail',
      required: true,
      disabled : false,
      backName : 'customEntityEmail'

    },
    {
      type: 'text',
      value: '',
      name: 'customEntityCommercialName',
      required: true,
      errorText : 'El nombre es requerido y solo debe conter letras',
      regexp : '^[a-zA-Z]+$' ,
      label: 'Commercial Name ',
      disabled : false,
      backName : 'customEntityCommercialName'

    }
  ],
  secondForm:
        [
          {
            type: 'select',
            name: 'entities',
            label: 'Listado de entidades',
            required: false,
            onchange: 'callToApi',
            options: [],
            disabled : true,
            defaultValue : '',
            isLoading : true,
            value : '',
            backName : 'entity'
          },
          // {
          //   type: 'select',
          //   name: 'countries',
          //   label: 'Listado',
          //   required: false,
          //   onchange: 'callToApi',
          //   options: [],
          //   disabled : true,
          //   defaultValue : '',
          //   isLoading : false,
          //   value : ''
          // }
        ],



};
