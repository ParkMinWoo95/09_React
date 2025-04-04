import CommentForm from "../Comment/CommentForm";
import {
  BoardContent,
  BoardWriter,
  Container,
  Title,
  Button,
  ImageContainer,
  ImagePreview,
  Form,
  Input,
} from "../styles/Styles";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BoardDetail = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);
  const navi = useNavigate();
  const { auth } = useContext(AuthContext);
  const [error, setError] = useState(false);

  const handleBack = () => {
    navi(-1);
  };

  useEffect(() => {
    axios
      .get(`http://localhost/boards/${id}`)
      .then((response) => {
        setBoard(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Title>게시글 불러오는 중입니다에요...</Title>
      </Container>
    );
  }

  const handleDelete = () => {
    if (confirm("정말 삭제하시겠어요?")) {
      axios
        .delete(`http://localhost/boards/${id}`, {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        })
        .then(() => {
          setBoard({
            boardTitle: "삭제중입니다...",
            boardContent: "삭제중",
            boardWriter: "삭제중",
          });

          setTimeout(() => {
            alert("삭제완료");
            navi("/boards");
          }, 3000);
        });
    }
  };

  if (error) {
    return (
      <Container>
        <Title>게시글을 찾을 수 없습니다</Title>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Title>{board.boardTitle}</Title>
        <BoardWriter>작성자: {board.boardWriter}</BoardWriter>
        <BoardContent>{board.BoardContent}</BoardContent>
        {board.boardFileUrl ? (
          <ImageContainer>
            <ImagePreview src={board.boardFileUrl} alt="첨부이미지지" />
          </ImageContainer>
        ) : (
          <div>이미지가 존재하지 않습니다</div>
        )}
        <Form onSubmit={handleDelete}>
          {board.boardWriter === auth.memberId && (
            <>
              <Button style={{ background: "green" }}>
                수정하기 버튼이다옹
              </Button>
              <Button style={{ background: "crimson" }}>삭제하기 다옹</Button>
            </>
          )}
          <Button onClick={handleBack}>뒤로가기 다옹</Button>
        </Form>
      </Container>
      <CommentForm boardNo={id} />
    </>
  );
};

export default BoardDetail;
