import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ContentWrapper } from '../../components/layout/ContentWrapper.css';
import PostCard from './post-card/PostCard';
import { getAllPosts, selectPosts, selectStatus } from './blogSlice';
import { ThreeDots } from 'react-loader-spinner';

const Blog = () => {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <ContentWrapper>
      {posts.map((post: any) => {
        return <PostCard title={post.title} body={post.body} id={post.id} key={post.id} />;
      })}
      {status === 'loading' && <ThreeDots color="#e75a7c" height={60} width={60} />}
    </ContentWrapper>
  );
};

export default Blog;
