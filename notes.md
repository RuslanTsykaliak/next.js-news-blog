

10  hours.

# Improve

- Allow multiple spaces and paragraphs in the text content to preserve line breaks and spaces entered by a user.

Tried options:

CreatePostForm.tsx
1.
<!-- className="border border-gray-300 p-2 min-h-20 break-words whitespace-pre-line" -->
      

2.
<!-- <div dangerouslySetInnerHTML={{ __html: content }}></div> -->

Post.tsx
3. 
<!-- <div dangerouslySetInnerHTML={{ __html: content }} className="content"></div> -->

4. Work with small view space:
<!-- <textarea className="content" readOnly value={content}></textarea>  -->

5. Work perfectly:
<!-- <div className="content whitespace-pre-line">{content}</div>
or
<p></p> -->