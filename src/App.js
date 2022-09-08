import './App.css';
import styled,{ keyframes } from 'styled-components'
/*
  estilos sencillos
*/
const P = styled.p`
  font-size: 24px;
  color: red;
`
const Content = styled.div`
  padding: 20px 25px;
`
/* 
  estilos heredados
*/
const Button  = styled.button`
  transition: box-shadow 0.2s ease;
  background-color : ${props => props.primary ? 'red':'white'};
  color: ${props => props.primary ? 'white':'red'}
  border-radius: 4px;
  border: solid 2px red;
  
  &:hover{
    box-shadow: 1px 2px 5px rgb(0,0,0,0.3)
  }

  &.secondary{
    background-color: blue;
    border:blue;
    color:white;
  }

  .info{
    color:orange;
  }
`
const BlockButton = styled(Button)`
  width:100%;
  font-size:24px`

/**
 * estilos con componentes
 */


const Link = ({className, ...props}) =>{
  return <a className = { className } {...props} > links</a>
}

const StyledLink = styled(Link)`
  color: red;
`

const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red'
}))`
  font-size: 16px;
  border: 1px solid red;
  color: ${props => props.color}`

const Password = styled(Input).attrs({
  type: 'password'
})``

const girar = keyframes`
  from{
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg)
  }
`

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite
`
const App= ()=> {
  return (
    <Content>
      <P>Mi parrafo</P>
      <Button>Enviar <p className='info'>vs</p></Button>
      <Button primary>Enviar</Button>
      <Button className="secondary">Enviar</Button>
      <BlockButton>Enviar</BlockButton>
      <BlockButton primary as="a" href="#"> Enviar</BlockButton>
      <Link></Link>
      <StyledLink></StyledLink>
      <Input />
      <Input color='blue'/>
      <Password/>
      <Password color='blue'/>
      <Rotar>gIRARE</Rotar>
    </Content>
  );
}

export default App;
