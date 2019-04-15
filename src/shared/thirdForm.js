export const thirdForm =  {
  firstForm: [
    {
      type: 'file',
      value: '',
      name: 'DNI front',
      required: true,
      label: 'Imagen DNI frontal',
      disabled : false,
      backName : 'dniFront',
      errorTextDisabled : 'Elimine la imagen previa'

    },
    {
      type: 'camera',
      label: 'Capturar imagen DNI trasero ',
      value: '',
      errorTextDisabled : 'Elimine la imagen previa',

      name: 'DNI front camera',
      required: true,
      disabled : false,
      backName : 'dniFront'

    },
    {
      type: 'file',
      label: 'Imagen DNI trasero',
      value: '',
      name: 'DNI back ',
      required: true,
      disabled : false,
      backName : 'dniBack',
      errorTextDisabled : 'Elimine la imagen previa'

    },

    {
      type: 'camera',
      label: 'Capturar imagen DNI trasero',
      value: '',
      name: 'DNI back camera',
      required: true,
      disabled : false,
      backName : 'dniBack',
      errorTextDisabled : 'Elimine la imagen previa'
    },
  ]



};
