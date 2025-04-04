import {
  CommentAuthor,
  CommentContainer,
  CommentContent,
  CommentDate,
  CommentItem,
  Container,
} from "../styles/Styles";
import { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ boardNo, success }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost/comments?boardNo=${boardNo}`)
      .then((response) => {
        setComments([...response.data]);
      });
  }, [success]);

  return (
    <CommentContainer>
      {comments.length === 0 ? (
        <CommentItem>
          <CommentAuthor>댓글</CommentAuthor>
          <CommentContent>없다에요</CommentContent>
          <CommentDate>알겠어요?</CommentDate>
        </CommentItem>
      ) : (
        comments.map((comment) => {
          return (
            <CommentItem>
              <CommentAuthor>{comment.commentWriter}</CommentAuthor>
              <CommentContent>{comment.commentContent}</CommentContent>
              <CommentDate>{comment.createDate}</CommentDate>
            </CommentItem>
          );
        })
      )}
    </CommentContainer>
  );
};

export default CommentList;
