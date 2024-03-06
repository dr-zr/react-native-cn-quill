import fs from 'fs';
import path from 'path';

const readQuillFile = () => {
  const filePath = path.resolve(__dirname, './quill');
  return fs.readFileSync(filePath, 'utf-8');
};

const quillContent = readQuillFile();

export const quill_js = (cdn: boolean) =>
  cdn === true
    ? '<script src="https://cdn.quilljs.com/1.3.7/quill.min.js"></script>'
    : `
    <script>
    /*!
    * Quill Editor v2.0.0-rc2
    * https://quilljs.com/
    */
    ${quillContent}
   </script>
`;
