import styled from "@emotion/styled"

export default function Home() {
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
      {/* TODO: 내일고 */}
    </Content>


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
min-height: 500px;

padding: 88px 105px;

`