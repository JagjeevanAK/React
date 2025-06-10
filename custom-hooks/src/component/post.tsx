import { useFetch } from "../hooks/useFetch";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function Posts() {
  const { data, err, loading } = useFetch<Post>("https://jsonplaceholder.typicode.com/posts/1")
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      height: "100vh",
      padding: "2rem"
    }}>
      {loading && <div>Loading...</div>}
      {err && (
        <div style={{ 
            color: "red", 
            padding: "1rem", 
            border: "1px solid red", 
            borderRadius: "4px" 
        }}>
          <h3>Error occurred:</h3>
          <p>{err.message}</p>
        </div>
      )}
      {data && !loading && !err && (
        <div>
          <h2>Post #{data.id}</h2>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  )
}



