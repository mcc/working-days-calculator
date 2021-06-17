type ResultType = {
  data: string;
  error: string | null;
};

/**
 *
 * @description convert file to base64 string
 * @param {Object} file
 */
function toBase64(file: File): Promise<ResultType> {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve({ data: reader.result!.toString(), error: null });
    reader.onerror = (error) => reject({ error });
  });
}

export { toBase64 };
