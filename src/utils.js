export const row = (content, styles = '') => `
 <div class="row" style="${styles} ">
   ${content}
 </div>
`;

export const col = (content) => `
<div class="col-sm">
    ${content}
</div>
`;

export const css = (styles = {}) => {
  if (typeof styles === 'string') return styles;

  const toString = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(';');
};

export const block = (type) => `
 <form name="${type}">
  <h5>${type}</h5>
  <div class="mb-3">
    <input class="form-control" name="value" placeholder="value">
  </div>
  <div class="mb-3">
    <input class="form-control" name="styles" placeholder="styles">
  </div>
  <button type="submit" class="btn btn-primary">Добавить</button>
</form>
  `;
