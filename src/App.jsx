import { CarreraTecnicaList } from "./components/CarreraTecnicaList"

const initCarrerasTecnicas = [
    {codigo: 1, nombre: 'Programacion en Java'},
    {codigo: 2, nombre: 'Desarrollo aplicaciones web'}
]

export const App = () =>{
    return(
        <>
            <h1>Carreras Tecnicas</h1>
            <CarreraTecnicaList carrerasTecnicas={initCarrerasTecnicas}></CarreraTecnicaList>
        </>
    )
}