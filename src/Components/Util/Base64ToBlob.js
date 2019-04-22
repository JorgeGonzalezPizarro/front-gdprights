export const Base64ToBlob = (b64data,  sliceSize = 512) => {

  // const contentType =  b64data.split(';')[0].split(':')[1];
  // console.log(contentType)
  if(b64data.length === 0 ){
    return;
  }
  const byteCharacters = Buffer.from(b64data, 'base64').toString();
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: 'image/png' });
  const file = new File([blob], `File name.${blob.type}`, {type: 'image/png'} );
  return file;
  
};

const ContentType = (b64data) => {
  const block = b64data.split(';');
  return block[0].split(':')[1];
};