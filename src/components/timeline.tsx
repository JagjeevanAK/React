import { useState } from "react";
import { Post, type Prop } from "./Post";

export function Timeline(){
    const [post,setPost] = useState<Prop[]>([])
    const newpost ={   
        id: 1,
        name: "100xdev",
        subtitle: "followers",
        time: "12m",
        description: "Hello world this is my frist post and let's join the revolution",
        img: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
    }
    const postsData = post.map((post: Prop) => <Post
        key={post.id}       // important for recoil and avoiding un-necessary renders.
        name = {post.name}
        subtitle={post.subtitle}
        time = {post.time}
        description={post.description}
        img={post.img}
    />)
    return(
        <>
            <div style={outerStyle}>
                <button style={buttonStyle} onClick={()=>setPost([...post,newpost])}>
                    + Add Post
                </button>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {postsData}
                </div>
            </div>
        </>
    )
}


const outerStyle = {
    height: '100vh',
    width: '100vw',
    backgroundColor: "#f3f2ef",
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    gap: 20
}

const buttonStyle = {
    backgroundColor: '#0a66c2',
    color: 'white',
    border: 'none',
    borderRadius: 24,
    padding: '12px 24px',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    marginBottom: 20
}