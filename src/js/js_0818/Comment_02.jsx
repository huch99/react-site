import React, { useState } from 'react';

const Comment_02 = () => {
    const [userName, setUserName] = useState('');
    const [userComment, setUserComment] = useState('');
    const [comments, setComments] = useState([]);

    const uploadComment = (e) => {
        e.preventDefault();
        if (userName !== '' && userComment !== '') {
            setComments([...comments, { userName, userComment }]);
            setUserComment('');
            setUserName('');
        } else {
            alert('이름과 댓글을 모두 입력해주세요.');
        }

    }
    return (
        <>
            <h1>댓글 달기</h1>
            <form onSubmit={uploadComment}>
                <div>
                    <input type="text" value={userName} placeholder='이름' onChange={(e) => setUserName(e.target.value)}
                        style={{ width: '100px' }}
                    />
                    <button onClick={uploadComment}>제출</button>
                </div>
                <textarea placeholder='댓글' value={userComment} onChange={(e) => setUserComment(e.target.value)}
                    style={{ width: '300px', height: '300px', padding: '10px' }}
                ></textarea>

            </form>

            <ul
                style={{ width: '600px', border: '2px solid grey', padding: '10px', listStyleType: 'none' }}
            >
                {comments.map((comment, index) => (
                    <li key={index}
                        style={{ width: '100%', textAlign: 'left', border: '2px solid grey', borderRadius: '5px', display: 'flex', marginBottom: '10px', justifyContent: 'space-between' }}
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                            style={{ width: '50px', height: '50px', borderRadius: '50%', margin: 'auto 10px' }}
                        />
                        <div
                            style={{ width: '100%' }}
                        >
                            <h3> {comment.userName} </h3>
                            <p> {comment.userComment} </p>
                        </div>
                        <button onClick={(e) => {
                            const newComments = comments.filter((_, idx) => idx !== index);
                            setComments(newComments);
                        }}
                            style={{}}
                        >X</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Comment_02;