import { $getRoot, $getSelection, $isRangeSelection, TextNode } from "lexical";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { useEffect, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
const theme = {
  ltr: "text-left",
  rtl: "text-right",
  paragraph: "editor-paragraph",
};

function onError(error) {
  console.log(error);
}
const initConfig = {
  namespace: "lexicalTextEditor",
  theme,
  onError,
};
export default function Editor() {
  const [editorState, setEditorState] = useState<string>();
  function onChange(editorState) {
    const editorStateJSON = editorState.toJSON();
    const serialized = JSON.stringify(editorStateJSON);

    setEditorState(serialized);
  }

  return (
    <LexicalComposer initialConfig={initConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            aria-placeholder={"...شروع به نوشتن کنید"}
            placeholder={
              <div className="text-gray-500 absolute top-4 right-4 select-none pointer-events-none">
                ...شروع به نوشتن کنید
              </div>
            }
          />
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <OnChangePlugin onChange={onChange} />
      {/* <PreviewBoundaryPlugin limit={300} /> */}
    </LexicalComposer>
  );
}

function OnChangePlugin({ onChange }) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);
  return null;
}













// function PreviewBoundaryPlugin({ limit = 300 }: { limit: number }) {
//   const editor = useLexicalComposerContext()[0];
//   useEffect(() => {
//     const unRegisterTransform = RegisterPreviewTransformer(limit);
//     return () => {
//       unRegisterTransform();
//     };
//   }, [editor, limit]);
//   return null;
// }
// function RegisterPreviewTransformer(limit: number) {
//   return registerNodeTransform(TextNode, (textNode) => {
//     const text = textNode.getTextContent();
//     const offset = getOffsetOfNode(textNode);
//     const end = offset + text.length;
//     const withinPreview = offset < limit;
//     if (withinPreview) {
//       textNode.setStyle("border border-gray-500");
//     } else {
//       textNode.setFormat("");
//     }
//   });
// }
