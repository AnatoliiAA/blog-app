import { useEffect, useState } from 'react';
import { getPosts } from '../../api/api';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ContentWrapper } from '../../components/layout/ContentWrapper.css';
import PostCard from './post-card/PostCard';
import { getAllPosts, selectPosts, selectStatus } from './blogSlice';

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
    </ContentWrapper>
  );
};

export default Blog;
