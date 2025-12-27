#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function loadJSON(p) {
  const abs = path.resolve(p);
  const raw = fs.readFileSync(abs, 'utf-8');
  return JSON.parse(raw);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function toTsType(prop) {
  const t = prop.type;
  if (t === 'string' || t === 'number' || t === 'boolean') return t;
  if (t === 'function') return '(event?: any) => void';
  if (t === 'enum') return prop.values && prop.values.length ? prop.values.map(v => JSON.stringify(v)).join(' | ') : 'string';
  if (t === 'array') return 'any[]';
  if (t === 'object') return 'Record<string, any>';
  return 'any';
}

function buildPropInterface(name, props) {
  const lines = Object.entries(props).map(([k, v]) => {
    const optional = v.required ? '' : '?';
    return `  ${k}${optional}: ${toTsType(v)};`;
  });
  lines.push('  children?: React.ReactNode;');
  return `export type ${name}Props = {
${lines.join('\n')}
};`;
}

function defaultPropsDestructure(props) {
  const keys = Object.keys(props);
  if (!keys.includes('children')) keys.push('children');
  return keys.join(', ');
}

function reactRenderBody(spec) {
  const n = spec.name;
  if (n.toLowerCase() === 'button') {
    return `<button className="ba-${n}" disabled={disabled} onClick={onClick}>{label}</button>`;
  }
  if (n.toLowerCase() === 'textinput') {
    return `<input className="ba-${n}" value={value} placeholder={placeholder} type={type} disabled={disabled} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />`;
  }
  if (n.toLowerCase() === 'select') {
    return `<select className="ba-${n}" value={value} disabled={disabled} onChange={onChange}>
      {placeholder ? <option value="">{placeholder}</option> : null}
      {(options || []).map((opt: any) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>`;
  }
  if (n.toLowerCase() === 'checkbox') {
    return `<label className="ba-${n}">
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
      <span style={{ marginLeft: '0.5rem' }}>{label}</span>
    </label>`;
  }
  if (n.toLowerCase() === 'textarea') {
    return `<textarea className="ba-${n}" value={value} placeholder={placeholder} rows={rows} disabled={disabled} onChange={onChange} />`;
  }
  if (n.toLowerCase() === 'toggle') {
    return `<label className="ba-${n}" style={{ display: 'inline-flex', alignItems: 'center', cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} style={{ width: '40px', height: '20px' }} />
    </label>`;
  }
  if (n.toLowerCase() === 'radio') {
    return `<div className="ba-${n}">
      {(options || []).map((opt: any) => (
        <label key={opt.value} style={{ display: 'block', marginBottom: '0.5rem' }}>
          <input type="radio" name={name} value={opt.value} checked={value === opt.value} disabled={disabled} onChange={onChange} />
          <span style={{ marginLeft: '0.5rem' }}>{opt.label}</span>
        </label>
      ))}
    </div>`;
  }
  if (n.toLowerCase() === 'datepicker') {
    return `<input className="ba-${n}" type="date" value={value} min={min} max={max} disabled={disabled} onChange={onChange} />`;
  }
  if (n.toLowerCase() === 'card') {
    return `<div className="ba-${n}" data-elevation={elevation} data-variant={variant}>{children}</div>`;
  }
  if (n.toLowerCase() === 'tabs') {
    return `<div className="ba-${n}">
      <div className="ba-${n}__header">
        {(items || []).map((item: any) => (
          <button key={item.value} onClick={() => onChange?.({ target: { value: item.value } })} className={active === item.value ? 'active' : ''}>{item.label}</button>
        ))}
      </div>
    </div>`;
  }
  if (n.toLowerCase() === 'breadcrumb') {
    return `<nav className="ba-${n}">
      {(items || []).map((item: any, idx: number) => (
        <span key={idx}>
          {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
          {idx < items.length - 1 && <span style={{ margin: '0 0.5rem' }}>/</span>}
        </span>
      ))}
    </nav>`;
  }
  return `<div className="ba-${n}">{children ?? null}</div>`;
}

function buildReactComponent(spec) {
  const iface = buildPropInterface(spec.name, spec.props || {});
  const destructure = defaultPropsDestructure(spec.props || {});
  const body = reactRenderBody(spec);
  return `import React from 'react';
import '../styles/${spec.name}.css';

${iface}

export function ${spec.name}({ ${destructure} }: ${spec.name}Props) {
  return (
    ${body}
  );
}
`;
}

function buildCss(spec) {
  const cls = `.ba-${spec.name}`;
  return `${cls} {
  font-family: var(--font-family, system-ui);
  color: var(--color-fg, #111);
  background: var(--color-bg, #fff);
  border: 1px solid var(--color-border, #ddd);
  border-radius: var(--radius, 6px);
  padding: var(--space-2, 8px) var(--space-3, 12px);
}
`;
}

function generateForReact(spec, outRoot) {
  const compDir = path.join(outRoot, 'components');
  const styleDir = path.join(outRoot, 'styles');
  ensureDir(compDir);
  ensureDir(styleDir);
  const compFile = path.join(compDir, `${spec.name}.tsx`);
  const cssFile = path.join(styleDir, `${spec.name}.css`);
  fs.writeFileSync(compFile, buildReactComponent(spec));
  fs.writeFileSync(cssFile, buildCss(spec));
  return [compFile, cssFile];
}

function main() {
  const specPath = process.argv[2];
  const stack = (process.argv[3] || 'react').toLowerCase();
  const designSystem = process.argv[4] || 'material-design';
  if (!specPath) {
    console.error('Usage: component-generator <specPath> [stack] [designSystem]');
    process.exit(1);
  }
  const spec = loadJSON(specPath);
  const outRoot = path.resolve('tech-stacks', stack);
  ensureDir(outRoot);
  let outputs = [];
  if (stack === 'react') {
    outputs = generateForReact(spec, outRoot);
  } else {
    console.error(`Stack "${stack}" not yet implemented.`);
    process.exit(2);
  }
  console.log(JSON.stringify({ component: spec.name, stack, designSystem, outputs }, null, 2));
}

if (require.main === module) main();
