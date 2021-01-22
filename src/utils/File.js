/**
 *
 * @description convert file to base64 string
 * @param {OBject} file
 */
const toBase64 = (file) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.readAsDataURL(file);
    reader.onload = () => resolve({ data: reader.result.toString(), error: null });
    reader.onerror = (error) => reject({ error }); 
  });
};

export { toBase64 };
