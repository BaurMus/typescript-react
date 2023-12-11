import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export async function http<T>(request: string, setStateResponse: React.Dispatch<React.SetStateAction<T>>): Promise<void>{
  const response = await fetch(request);
  const body = await response.json();
  setStateResponse(body);
}

interface IPost {
  title?: string,
  body?: string,
}

export const Post = () => {
  const {id} = useParams();

  const [post, setPost] = useState<IPost>({
    title: '',
    body: '',
  });

  React.useEffect(() => {
    http<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`, setPost);
  },[]);

  return (
    <section>
      <h1>Post</h1>
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
     </section>
  )
}

// type RouteParams = {
//   id: string,
// }

// interface IPost {
//   title?: string,
//   body?: string,
// }

// type PostState = {
//   post: IPost,
// }

// class Post extends Component<RouteComponentProps<RouteParams>, PostState> {
//   state = {
//     post: {
//       title: '',
//       body: '',
//     },
//   }

//   componentDidMount() {
//     const id = this.props.match.params.id || '';

//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then(res => res.json())
//       .then(post => { this.setState({ post }) })
//   }

//   render() {
//     const { post } = this.state;
//     const { title, body } = post;

//     return (
//       <section>
//         <h1>Post</h1>
//         <article>
//           <h2>{title}</h2>
//           <p>{body}</p>
//         </article>
//       </section>
//     );
//   }
// };

// export default Post;