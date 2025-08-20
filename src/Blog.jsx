import { BrowserRouter, Routes, Route } from 'react-router';
import styled from 'styled-components';
// Pages
import MainPage from './components/blog_pages/MainPage';
import PostWritePage from './components/blog_pages/PostWritePage';
import PostViewPage from './components/blog_pages/PostViewPage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function Blog(props) {
    return (
        <BrowserRouter>
            <MainTitleText>미니 블로그</MainTitleText>
            <Routes>
                <Route
                    index
                    element={<MainPage />}
                />
                <Route
                    path='post-write'
                    element={<PostWritePage />}
                />
                <Route
                    path='post/:postId'
                    element={<PostViewPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Blog;