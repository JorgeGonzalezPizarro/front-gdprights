export const thirdForm =  {
  firstForm: [
    {
      type: 'file',
      value: '',
      title :'Imagen Anverso DNI',
      name: 'DNI front',
      required: true,
      label: 'Selecciona imagen ',
      disabled : false,
      backName : 'dniFront',
      errorTextDisabled : 'Elimine la imagen previa'

    },
    {
      type: 'camera',
      label: 'Capturar imagen  ',
      value: '',
      errorTextDisabled : 'Elimine la imagen previa',
      name: 'DNI front camera',
      required: true,
      disabled : false,
      backName : 'dniFront'

    },
    {
      type: 'file',
      label: 'Selecciona Imagen ',
      title :'Imagen Reverso DNI',
      value: '',
      name: 'DNI back ',
      required: true,
      disabled : false,
      backName : 'dniBack',
      errorTextDisabled : 'Elimine la imagen previa'

    },

    {
      type: 'camera',
      label: 'Capturar imagen ',
      value: '',
      name: 'DNI back camera',
      required: true,
      disabled : false,
      backName : 'dniBack',
      errorTextDisabled : 'Elimine la imagen previa'
    },
  ]



};
