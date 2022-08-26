const VALUE_IN_BRACES = /{.*}/;

const injectUrlParam = (template: string, params: string) =>
  template.replace(VALUE_IN_BRACES, params);

const truncate = (str: strin, maxLength: number = 18) => {
  if (str.length > maxLength) {
    return str.substr(0, 18) + '...';
  }
  return str;
};

export default {
  injectUrlParam,
  truncate,
};
