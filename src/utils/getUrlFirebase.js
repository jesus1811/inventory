export const getUrlFirebase = (nameFoto) => {
  if (nameFoto)
    return `https://firebasestorage.googleapis.com/v0/b/inventory-images.appspot.com/o/${nameFoto}?alt=media&token=04542daf-f80f-44b4-bf55-f3baf48bba1a`;
};
