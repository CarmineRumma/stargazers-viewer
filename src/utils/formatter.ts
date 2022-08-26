const VALUE_IN_BRACES = /{.*}/;

const injectUrlParam = (template: string, params: string) =>
  template.replace(VALUE_IN_BRACES, params);

export default {
  injectUrlParam,
};
