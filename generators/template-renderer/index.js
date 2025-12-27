// Placeholder for template rendering engine
module.exports = function renderTemplate(template, context) {
  // In future: use Handlebars/EJS/etc. For now, simple replacement.
  return template.replace(/\{\{(\w+)\}\}/g, (_, k) => String(context[k] ?? ''));
};
