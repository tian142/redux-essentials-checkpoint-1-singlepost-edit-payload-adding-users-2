import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onAuthorChanged = (e) => setAuthor(e.target.value)

  const users = useSelector((state) => state.users)

  const mapUsersSelection = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ))

  const onSavePostClicked = () => dispatch(postAdded(title, content, author))

  const canSubmit = Boolean(title) && Boolean(content) && Boolean(author)

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <label>Author</label>
        <select value={author} onChange={onAuthorChanged}>
          <option value=""></option>
          {mapUsersSelection}
        </select>
        <button type="button" disabled={!canSubmit} onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}
