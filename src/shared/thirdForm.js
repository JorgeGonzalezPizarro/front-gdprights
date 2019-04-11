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
      name: 'DNI front',
      required: false,
      disabled : false,
      backName : 'dniFront'

    },
    {
      type: 'file',
      label: 'Imagen DNI trasero',
      value: '',
      name: 'DNI back',
      required: true,
      disabled : false,
      backName : 'dniBack'

    },

    {
      type: 'camera',
      label: 'Capturar imagen DNI delantero',
      value: '',
      name: 'DNI back',
      required: false,
      disabled : false,
      backName : 'dniBack'

    },
  ]



};
