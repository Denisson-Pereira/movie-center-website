import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebaseConfig';

export const Perfil = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth); 
      localStorage.removeItem('user'); 
      console.log('Usuário saiu');
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  };

  return (
    <div>
      <div>teste rota privada</div>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};
