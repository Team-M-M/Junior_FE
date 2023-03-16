import styled from "@emotion/styled"
import { useState } from "react"

export default function Home() {

  const [inputComment, setInputComment] = useState("");
  const handleCommentChange = (event) => {
    setInputComment(event.target.value)
  }

  return <Container>
    <Header>
      <h1 className="logo">
        <span>{`{ }`}</span>
        sjr.project
      </h1>
      <div className="login_btns">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </Header>
    {/* banner */}
    <Banner>
      Banner
    </Banner>
    {/* subNavigation */}
    <Navigation>
      <div>자유게시판</div>
      <div>중고마켓</div>
      <div>마이페이지</div>
    </Navigation>
    {/* main content*/}
    <Content>
    </Content>
    {/* Content 관련 Button들 */}
    <ContentButtons>
      <button>목록으로</button>
      <button>수정하기</button>
      <button>삭제하기</button>
    </ContentButtons>
    {/* 댓글 */}
    <Comments>
      <h1>댓글</h1>
      <div class="userInfo">
        <input type="text" placeholder="작성자" />
        <input type="password" placeholder="비밀번호" />
      </div>
      <div class="comment">
        <textarea type="text" placeholder="댓글을 작성하세요" onChange={handleCommentChange} value={inputComment} maxLength={100} />
        <div class="comment_regist">
          <p>{inputComment.length}/100</p> <button>등록하기</button>
        </div>
      </div>
    </Comments>
  </Container>
}

const Container = styled.div`
width:100%;
display:flex;
flex-direction: column;
align-items: center;
`
const Header = styled.header`
width:1200px;
display:flex;
align-items: center;
justify-content: space-between;
  .logo{
    span{
      color : var(--yellow);
      margin-right:10px;
    }
  }
  .login_btns{
    button{
      border:none;
      background-color: none;
      width:92px;
    height:44px;
    font-weight: bold;
    cursor:pointer;
    &:last-of-type{
      background-color: var(--yellow);
    }
    }
   
  }
`

const Banner = styled.section`
  width:100%;
  height:400px;
  background:#ddd;
`

const Navigation = styled.nav`
margin-bottom:55px;
    display:flex;
    justify-content: center;
    align-items: center;
    height:64px;
    width:100%;
    background:var(--yellow);
  div{
    text-align: center;
    width:100px;
    margin-right:20px;
    &:nth-of-type(2){
    border-left:1px solid #fff;
    border-right:1px solid #fff;
}
    
  }
`

const Content = styled.main`
width: 1200px;
background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
min-height: 1000px;

padding: 88px 105px;

`

const ContentButtons = styled.section`
display:flex;
justify-content: center;
align-items: center;
width:1200px;
height:200px;
border-bottom:3px solid #efefef;
button{
 width:130px;
 height:50px;
 background: #efefef;
  margin-right:20px;
}
`

const Comments = styled.section`
width:1200px;
margin-top:50px;
padding-bottom:100px;
h1{
  margin-bottom:30px;
  font-weight: bold;
  font-size:20px;
}
.userInfo{
  margin-bottom:20px;
  input{
  padding:10px;
  border: 2px solid;
  border-color: var(--gray5);
  margin-right:10px;
}
}

.comment{
    textarea{
    padding:10px;
    border: 2px solid;
    border-color: var(--gray5);
    border-bottom:none;
    margin-right:10px;
    width:100%;
    height: 200px;
  }
  .comment_regist{
    display:flex;
    justify-content: space-between;
    width:100%;
    height:50px;
    border: 2px solid;
    border-color: var(--gray5);
    button{
      background:#000;
      color:#fff;
      padding:10px;
      cursor: pointer;
    }
  }
}

`