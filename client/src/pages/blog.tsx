import { useState } from "react"
import Buttons from "../components/buttons"
import { handleImageUpload } from "../hooks/image"

const Blog = () => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('')
  return (
   <div>
    <div>
        <h1>New Blog</h1>
        <div>
            <Buttons primaryText="Publish" secondaryText="Draft"/>
        </div>
    </div>
    <div>
        <input type="file" accept="imgage/*" onChange={handleImageUpload}/>
        <input type="text" placeholder="Enter Title Of Your Blog" onChange={e => setTitle(e.target.value)} value={title}/>
        <textarea placeholder="What's on your mind?" value={content} onChange={e => setContent(e.target.value)}/>
    </div>
    <div></div>
    <div></div>
   </div>
  )
}

export default Blog