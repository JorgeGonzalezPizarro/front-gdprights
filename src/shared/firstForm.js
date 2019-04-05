export const firstForm =  {
  firstForm: [
    {
      type: 'text',
      value: 'aa',
      name: 'customEntityName',
      required: true,
      label: 'Nombre',
      disabled : false,
      backName : 'customEntityName'
    },
    {
      type: 'text',
      label: 'Email ',
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
