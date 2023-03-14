import React , { useState}from 'react';
import{ Container, Form} from './styled';
import ContainerInput from '../../Components/input';
import ContainerButton from '../../Components/Botao';

const Login = () => {

    const [ loading, setLoading] = useState( false)

    const handleChange = (event) => {

        console.log('Digitando...' ,event.target.name, event.target.value);
    }


    const handleSubmit = async  ( event ) => {
        event.preventDefault()

    try{
        setLoading(true)
        alert('login')
        setLoading(false)

    }

    catch (err) {  
        alert('login invalido' + err)

    }
    
    }

    
      
        return (
            <Container>
              <h1> Login👋 </h1>
              <Form>

               
                <div>
                <ContainerInput
                  name='email'
                  placeholder='Digite o seu e-mail'
                  onChange={handleChange}
                  type='email'
                />
                <ContainerInput
                  name='password'
                  placeholder='Digite a sua senha'
                  onChange={handleChange}
                  type='password'
                />
                <ContainerButton
                  type='submit'
                  text='Entrar!'
                  onClick={handleSubmit}
                />

               </div>
                  <p>Não possui conta?</p>
                
               
              </Form>
            </Container>
            
          )
        }
      


export default Login 