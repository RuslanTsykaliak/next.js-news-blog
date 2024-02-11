// text-editor/page.tsx
'use client'

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import Tiptap from "./_components/Tiptap";

function TextEditor() {
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
    }
  })

  return (
    <main className="p-24 bg-white dark:bg-gray-800">
      <Form {...form}>
        <form>
          {/* Title */}
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-200">Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Main title for your post"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-200">Description</FormLabel>
                <FormControl>
                  <Tiptap
                    description={field.name}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </main>
  );
}

export default TextEditor;
