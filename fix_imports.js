const fs = require('fs');
const path = require('path');

const mappings = {
  PageLayout: 'layout',
  PageHeader: 'layout',
  Navbar: 'layout',
  Footer: 'layout',
  header: 'layout',
  Hero: 'home',
  HomeCapabilities: 'home',
  HomeProjectPreview: 'home',
  Positioning: 'home',
  techStack: 'home',
  CTA: 'sections',
  Metrics: 'sections',
  Process: 'sections',
  Projects: 'sections',
  Services: 'sections',
  Technologies: 'sections',
  Bios: 'ui',
  SkillList: 'ui'
};

function fixImports(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixImports(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      Object.keys(mappings).forEach(comp => {
        // Look for import from '../components/Comp'
        const regex1 = new RegExp(`from ['"]\\.\\.\\/components\\/${comp}['"]`, 'g');
        if (regex1.test(content)) {
          content = content.replace(regex1, `from '../components/${mappings[comp]}/${comp}'`);
          changed = true;
        }
        // Look for import from './components/Comp' (in root.tsx)
        const regex2 = new RegExp(`from ['"]\\.\\/components\\/${comp}['"]`, 'g');
        if (regex2.test(content)) {
          content = content.replace(regex2, `from './components/${mappings[comp]}/${comp}'`);
          changed = true;
        }
      });
      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  });
}

fixImports('./app/routes');
fixImports('./app'); // to catch root.tsx
console.log('Imports fixed.');
