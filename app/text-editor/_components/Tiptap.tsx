// Tiptap.tsx

'use client'

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Heading from "@tiptap/extension-heading"
import { Toolbar } from "./Toolbar"

export default function Tiptap({
  description,
  onChange,
}: {
  description: string
  onChange: (rechText: string) => void
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Heading.configure({
        HTMLAttributes: {
          class: "text-2xl font-bold",
          levels: [2],
        },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          "rounded-md border min-h-[150px] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xl",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML())
      console.log(editor.getHTML());
    }
  })

  return (
    <div className="flex flex-col justify-stretch min-h-[250px]">
      <Toolbar
        editor={editor}
      />
      <EditorContent
        editor={editor}
      />
    </div>
  )
};
