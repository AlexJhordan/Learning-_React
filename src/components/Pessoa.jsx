function Pessoa({nome, idade, trabalho, local, link}){
    return(
        <div>
            <img src={link} alt="img" />
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Trabalho: {trabalho}</p>
            <p>Mora em: {local}</p>
        </div>
    )
}

export default Pessoa