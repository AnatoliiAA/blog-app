import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { PostParams } from '../../common/types';
import Comments from './comments/Comments';
import { ContentWrapper } from '../../components/layout/ContentWrapper.css';
import PostCard from './post-card/PostCard';
import { selectPosts } from './blogSlice';

const Post = () => {
  const posts = useAppSelector(selectPosts);
  const { id } = useParams();
  const post = posts.filter((post: PostParams) => post.id === Number(id))[0];

  return (
    <>
      <ContentWrapper>
        <PostCard title={post.title} body={post.body} id={post.id} isOpened />
        <Comments postId={Number(id)} />
      </ContentWrapper>
    </>
  );
};

export default Post;
