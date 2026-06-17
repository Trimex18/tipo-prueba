import { useState } from "react";
const App = ()  => {
    /* Variables a utilizar */
    const [nombre, setNombre] = useState("");
    const [peso, setPeso] = useState("");
    const [estatura, setEstatura] =useState("");
    const [resultado, setResultado] = useState(null);
    const [estado, setEstado] =useState("");

    const calcular = (e) => {
        e.preventDefault();

        if (!nombre || !peso || !estatura){
            alert("porfavor complete los campos")
            return;
        }
            const imc = peso/ (estatura*estatura)
            let clasificacion;
            if(imc < 18.5) clasificacion = "Bajo peso";
            else if (imc < 25) clasificacion = "Normal";
            else if (imc < 30) clasificacion ="Sobrepeso";
            else clasificacion = "Obesidad";
            
            setResultado(imc.toFixed(2))
            setEstado(clasificacion)
        }
    
    const limpiar = () =>{
        setNombre("");
        setPeso("");
        setEstatura("");
        setResultado(null);
        setEstado("");

    }

    const obtenerColor = () => {
        if(estado === "Normal") return "success";
        if(estado === "Sobrepeso") return "warning";
        if(estado === "Obesidad") return "danger";
        return "secondary";
    }
    

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">Calculadora IMC</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={calcular}>
                                {/* input nombre */}
                                <div className="mb-3">
                                    <label htmlFor="form-label">Nombre: </label>
                                    <input className="form-control" 
                                        type="text"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>
                                
                                {/* input peso */}
                                <div className="mb-3">
                                    <label htmlFor="form-label">Peso (Kg): </label>
                                    <input className="form-control" 
                                        type="number"
                                        step={"0.1"}
                                        value={peso}
                                        onChange={(e) => setPeso(e.target.value)}
                                    />
                                </div>

                                {/* input estatura */}
                                <div className="mb-3">
                                    <label htmlFor="form-label">Estatura (m): </label>
                                    <input className="form-control" 
                                        type="number"
                                        step={"0.01"}
                                        value={estatura}
                                        onChange={(e) => setEstatura(e.target.value)}
                                    />
                                </div>
                                {/* botones */}
                                <div className="d-flex gap-2">
                                    <button type="submit" className="btn btn-primary">Calcular</button>
                                    <button type="button" className="btn btn-secondary" onClick={limpiar}>Limpiar</button>
                                </div>

                            </form>
                            { resultado &&(
                            <div className={`alert alert-${obtenerColor()} my-4`}>
                                <h5>resultado</h5>
                                <p>
                                    <strong>Paciente</strong> {nombre}
                                </p>
                                <p>
                                    <strong>IMC</strong> {resultado}
                                </p>
                                <p>
                                    <strong>Estado</strong> {estado}
                                </p>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default App