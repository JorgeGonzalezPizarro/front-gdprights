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
            name: 'entitiesList',
            label: 'Listado',
            required: false,
            onchange: 'callToApi',
            entities: [],
            disabled : true

          },
          {
            type: 'select',
            name: 'countriesList',
            label: 'Countries',
            required: false,
            onchange: 'callToApi',
            countries: [],
            disabled : true

          }
        ]


}
