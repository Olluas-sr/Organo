import { useState } from 'react';
import { Banner } from './components/Banner';
import { Form } from './components/FormBox';
import { Team } from './components/Teams';
import { Footer } from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Programacao',
      primaryColor:'#57c278',
      secundaryColor:'#d9f7d9' 
    },
    {
      name: 'Front-End',
      primaryColor:'#82cffa',
      secundaryColor:'#e8f8ff' 
    },
    {
      name: 'Data Science',
      primaryColor:'#a6d157',
      secundaryColor:'#f0f8e2' 
    },
    {
      name: 'Devops',
      primaryColor:'#e06b69',
      secundaryColor:'#fde7e8' 
    },
    {
      name: 'UX e Design',
      primaryColor:'#db6ebf',
      secundaryColor:'#fae9f5' 
    },
    {
      name: 'Mobile',
      primaryColor:'#ffba05',
      secundaryColor:'#fff5d9' 
    },
    {
      name: 'Inovacao e Gestao',
      primaryColor:'#ff8a29',
      secundaryColor:'#ffeedf' 
    }
  ]

  const [collaborators, setCollaborator] = useState([])

  const onNewAdd = (collaborator) =>{setCollaborator([...collaborators, collaborator])}
  
  return (
    <>
    <Banner/>
    <Form teamsName={teams.map(team => team.name)} onNewSubmit={collaborator => onNewAdd(collaborator)} />
    {teams.map( team => <Team 
                            key={team.name} 
                            TeamName={team.name} 
                            primaryColor={team.primaryColor} 
                            secundaryColor={team.secundaryColor}
                            collaborator={collaborators.filter(collaborator => collaborator.team === team.name)}
/>)}
    <Footer/>

    </>
  );
}

export default App;
