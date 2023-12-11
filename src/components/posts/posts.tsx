import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import { http } from '../post/post';

interface IPost {
  title?: string,
  id?: number,
}

export const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  React.useEffect(() => {
    http<IPost[]>('https://jsonplaceholder.typicode.com/posts/', setPosts);
    setIsLoaded(true);
  },[]);

  return (
    <div>
      <h1>Posts:</h1>
      <ul className="posts">
        {isLoaded ? posts.map(({ id, title }: IPost) => (
          <li key={id}><Link to={`/posts/${id}`}>{title}</Link></li>
        )) : <h1>Загрузка</h1>}
      </ul>
    </div>
  );
}



// interface IPost {
//   title?: string,
//   id?: number,
// }

// type PostState = {
//   data: IPost[],
// }

// interface IPosts extends RouteComponentProps {
//   test?: number,
// }

// class Posts extends Component<IPosts, PostState> {
//   state = {
//     data: [],
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/posts/')
//       .then(res => res.json())
//       .then(data => { this.setState({ data }) })
//   }

//   render() {
//     const { data } = this.state;
//     console.log(this.props.match.params);

//     return (
//       <div>
//         <h1>Posts:</h1>
//         <ul className="posts">
//           {data.map(({ id, title }: IPost) =>
//             <li key={id}><Link to={`/posts/${id}`}>{title}</Link></li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// };

// export default Posts;