export const thirdForm =  {
  firstForm: [
    {
      type: 'file',
      value: '',
      name: 'DNI front',
      required: true,
      label: 'Imagen DNI frontal',
      disabled : false,
      backName : 'dniFront'
    },
    {
      type: 'camera',
      label: 'Capturar imagen DNI trasero ',
      value: '',
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
      backName : 'dniBack'

    },

    {
      type: 'camera',
      label: 'Capturar imagen DNI trasero',
      value: '',
      name: 'DNI back camera',
      required: true,
      disabled : false,
      backName : 'dniBack'

    },
  ]



};
