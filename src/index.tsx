import type {
  DimensionsChangeData,
  EditorChangeData,
  EditorEventHandler,
  FormatChangeData,
  HtmlChangeData,
  SelectionChangeData,
  TextChangeData,
} from './constants/editor-event';
import QuillEditor, { type EditorProps } from './editor/quill-editor';
import { QuillToolbar } from './toolbar/quill-toolbar';
export default QuillEditor;
export { QuillToolbar };
export type {
  DimensionsChangeData, EditorChangeData, EditorEventHandler, EditorProps, FormatChangeData,
  HtmlChangeData, SelectionChangeData, TextChangeData
};

