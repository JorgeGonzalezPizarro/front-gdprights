export const firstForm =  {
  firstForm: [
    {
      type: 'Nombre',
      value: 'aa',
      name: 'customEntityName',
      required: true,
      label: 'Nombre',
      disabled : false
    },
    {
      type: 'text',
      label: 'Email ',
      value: '',
      name: 'customEntityEmail',
      required: true,
      disabled : false

    },
    {
      type: 'text',
      value: '',
      name: 'customEntityCommercialName',
      required: true,
      label: 'Commercial Name ',
      disabled : false

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
