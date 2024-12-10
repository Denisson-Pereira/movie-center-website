import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebaseConfig';
import { BackgroundImage, Button, Container, ProfileCard, ProfileContent } from './styles';
import { useNavigate } from 'react-router-dom';

export const Perfil = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      localStorage.removeItem('user'); 
      navigate('/');
      console.log('Usuário saiu');
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  };

  return (
    <Container>
      <BackgroundImage src="https://example.com/profile-bg.jpg" alt="Background" />
      <ProfileCard>
        <ProfileContent>
          <h1>Bem-vindo, Usuário!</h1>
          <p>Esta é a sua área de perfil. Você pode gerenciar suas configurações aqui.</p>
          <Button onClick={handleLogout}>Sair</Button>
        </ProfileContent>
      </ProfileCard>
    </Container>
  );
};
