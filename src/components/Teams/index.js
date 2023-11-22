import { Card } from '../Card'
import './Team.css'

export const Team = (props) => {
    return (
        props.collaborator.length > 0 &&  <section className='team' style={{backgroundColor: props.secundaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.TeamName}</h3>
            <div className='container-cards'>
                {props.collaborator.map( collaborator => <Card backgroundColor={props.primaryColor} key={collaborator.name} name={collaborator.name} office={collaborator.office} image={collaborator.image} /> )}
            </div>
        </section>
    )
}