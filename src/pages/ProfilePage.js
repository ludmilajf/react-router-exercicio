import Header from '../components/Header'
import { useParams } from 'react-router-dom';

function ProfilePage() {
  const params = useParams()
  return (
    <section>
      <h1>Página de perfil de {params.name}</h1>
      <Header />
    </section>
  );
}

export default ProfilePage;
