import asyncRoute from '../lib/asyncRoute';

const Home = asyncRoute(() => import('./Home'));
const About = asyncRoute(() => import('./About'));
const Post = asyncRoute(() => import('./Post'));
const Posts = asyncRoute(() => import('./Posts'));

export {
  Home,
  About,
  Post,
  Posts
}
