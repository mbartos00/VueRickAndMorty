const removeEmptyProperty = <T extends Object>(obj: T) => {
  Object.keys(obj).forEach(
    key =>
      (obj[key as keyof typeof obj] == null ||
        obj[key as keyof typeof obj] == undefined ||
        obj[key as keyof typeof obj] === '') &&
      delete obj[key as keyof typeof obj]
  );

  return obj;
};

export default removeEmptyProperty;
