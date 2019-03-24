export const firstForm = (entities) => {
  return (
    {
      firstForm: [
        {
          type: 'Nombre',
          value: 'c',
          name: 'customEntityName',
          required: true,
          label: 'Nombre'
        },
        {
          type: 'text',
          label: 'Email ',
          value: 'a',
          name: 'customEntityEmail',
          required: true
        },
        {
          type: 'text',
          value: '',
          name: 'customEntityCommercialName',
          required: true,
          label: 'Commercial Name '
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
            data: entities
          }
        ]
    }
  )
}