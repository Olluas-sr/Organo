import { useState } from "react";
import { Button } from "../Button";
import { DropdownMenu } from "../DropdownMenu";
import { InputText } from "../InputText";
import "./form.css";

export const Form = (props) => {
    
    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onNewSubmit({
            name,
            office,
            image,
            team            
        })

    }

    return (
        <section className="form-box">
            <form onSubmit={onSave} >
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputText
                    required={true}
                    label="Nome:"
                    placeholder="Digite o seu nome."
                    value={name}
                    onType={value => setName(value)}
                />
                <InputText 
                    required={true}
                    label="Cargo:"
                    placeholder="Digite o seu cargo."
                    value={office}
                    onType={value => setOffice(value)}
                />
                <InputText
                    label="Imagem:"
                    placeholder="Informe o endereco da imagem."
                    value={image}
                    onType={value => setImage(value)}
                />
                <DropdownMenu 
                    required={true}
                    label='Time'
                    items={props.teamsName}
                    value={team}
                    onSelect= {value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
};
