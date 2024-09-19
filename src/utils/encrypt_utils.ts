// Caesar cipher to encrypt the data.

export const caesarEncrypt = (data: string, key: string): string => {
  const shift = key.length;
  let result = "";
  for (let i = 0; i < data.length; i++) {
    result += String.fromCharCode(data.charCodeAt(i) + shift);
  }
  return result;
};

export const caesarDecrypt = (encryptedData: string, key: string): string => {
  const shift = key.length;
  let result = "";
  for (let i = 0; i < encryptedData.length; i++) {
    result += String.fromCharCode(encryptedData.charCodeAt(i) - shift);
  }
  return result;
};
