import React, { useState } from 'react';
import './App.css';
import { Col, Row, FloatingLabel, Form, Container, Button } from 'react-bootstrap';

// Imágen de logotipo

import logo from './img/Logo_numerologia_cotidiana.png'

// Imágenes para los tipos de pareja
import parejaNatural from './img/ParejaNat.png';
import parejaCompatible from './img/ParejaCom.png';
import parejaDesafio from './img/ParejaDes.png';
import parejaNeutral from './img/ParejaNeut.png';

// Texto de tipos de parejas
const parejaNaturalText = "Esta combinación establece una relación instantánea, que ofrece una comprensión fluida y fácil entre ambas personas, aun y cuando en ocasiones podrán presentar ciertas actitudes de competencia entre ellos.";
const parejaCompatibleText = "Esta combinación funciona mayormente como complemento, se llevan muy bien, y existe la posibilidad de apoyo mutuo y cooperación para lograr sus metas, generalmente son parejas que aprenden uno del otro o se fortalecen mutuamente.";
const parejaDesafioText = "Esta combinación representará un gran reto para llevarse bien, muchas veces existirán malos entendidos, habrá gran tendencia a que se rompa la comunicación entre ambos, y a que se obstaculicen mutuamente en el crecimiento individual de cada uno.";
const parejaNeutralText = "En relación a la compatibilidad neutral que opera entre el 1 y el 8, estas relaciones podrán llevarse muy bien al principio de la relación, ya que no interfieren en su búsqueda personal. Al 1 le gusta impulsar, iniciar, abrir la puerta y arrancar los motores de las cosas y generalmente una vez que ha hecho esto, empezará a buscar que nueva oportunidad perseguir y alcanzar, el 8 por lo contrario, es constante, determinante, le gusta quedarse hasta que confirma que se logró el resultado que quería alcanzar.";

const App = () => {
  //--------------------Estados----------------------------
  const [nombre1, setNombre1] = useState('');
  const [seleccionarDia1, setSeleccionarDia1] = useState('');
  const [seleccionarMes1, setSeleccionarMes1] = useState('');
  const [seleccionarYear1, setSeleccionarYear1] = useState('');

  const [nombre2, setNombre2] = useState('');
  const [seleccionarDia2, setSeleccionarDia2] = useState('');
  const [seleccionarMes2, setSeleccionarMes2] = useState('');
  const [seleccionarYear2, setSeleccionarYear2] = useState('');

  const [compatibilidad, setCompatibilidad] = useState('');
  const [imagenCompatibilidad, setImagenCompatibilidad] = useState('');
  const [textoCompatibilidad, setTextoCompatibilidad] = useState('');

  //--------------------Manejadores------------------------
  const cambioNombre1 = (event) => {
    setNombre1(event.target.value);
  };

  const cambioDias1 = (event) => {
    setSeleccionarDia1(event.target.value);
  };

  const cambioMes1 = (event) => {
    setSeleccionarMes1(event.target.value);
  };

  const cambioYear1 = (event) => {
    setSeleccionarYear1(event.target.value);
  };

  const cambioNombre2 = (event) => {
    setNombre2(event.target.value);
  };

  const cambioDias2 = (event) => {
    setSeleccionarDia2(event.target.value);
  };

  const cambioMes2 = (event) => {
    setSeleccionarMes2(event.target.value);
  };

  const cambioYear2 = (event) => {
    setSeleccionarYear2(event.target.value);
  };

  //--------------------Opciones----------------------------
  const diasOpciones = [];
  for (let dia = 1; dia <= 31; dia++) {
    diasOpciones.push(
      <option key={dia} value={dia}>
        {dia}
      </option>
    );
  }

  const comienzoYear = 1950;
  const finYear = 2024;
  const yearsOpciones = [];
  for (let year = comienzoYear; year <= finYear; year++) {
    yearsOpciones.push(
      <option key={year} value={year}>
        {year}
      </option>,
    );
  }

  //--------------------Cálculos----------------------------
  const sumaTotal1 =
    (seleccionarDia1 ? seleccionarDia1.split('').map(Number).reduce((sum, digit) => sum + digit, 0) : 0) +
    (seleccionarMes1 ? seleccionarMes1.split('').map(Number).reduce((sum, digit) => sum + digit, 0) : 0) +
    (seleccionarYear1 ? seleccionarYear1.split('').map(Number).reduce((sum, digit) => sum + digit, 0) : 0);

  const sumaTotal2 =
    (seleccionarDia2 ? seleccionarDia2.split('').map(Number).reduce((sum, digit) => sum + digit, 0) : 0) +
    (seleccionarMes2 ? seleccionarMes2.split('').map(Number).reduce((sum, digit) => sum + digit, 0) : 0) +
    (seleccionarYear2 ? seleccionarYear2.split('').map(Number).reduce((sum, digit) => sum + digit, 0) : 0);

  const reducirSumaTotal = (numero) => {
    let sumaReducida = numero.toString().split('').map(Number).reduce((sum, digit) => sum + digit, 0);
    if (sumaReducida >= 10 && sumaReducida < 22) {
      return 11;
    } else if (sumaReducida >= 22) {
      return 22;
    }
    return sumaReducida;
  };

  const sumaTotalReducida1 = reducirSumaTotal(sumaTotal1);

  const sumaTotalReducida2 = reducirSumaTotal(sumaTotal2);

  //----------Numero pareja----------------

  const tablaCompatibilidad = {
    1: { pn: [1, 5, 7, 11], pc: [2, 3, 9], pd: [4, 6, 22], pne: [8] },
    2: { pn: [2, 4, 8, 22], pc: [1, 3, 6, 9], pd: [5, 7, 11], pne: [] },
    3: { pn: [3, 6, 9], pc: [1, 2, 5], pd: [4, 7, 8, 11, 22], pne: [] },
    4: { pn: [2, 4, 8, 22], pc: [6, 7, 11], pd: [1, 3, 5, 9], pne: [] },
    5: { pn: [1, 5, 7, 11], pc: [3, 9], pd: [2, 4, 6, 22], pne: [8] },
    6: { pn: [3, 6, 9], pc: [2, 4, 8, 22], pd: [1, 5, 7, 11], pne: [] },
    7: { pn: [1, 5, 7, 11], pc: [4, 22], pd: [2, 3, 6, 8, 9], pne: [] },
    8: { pn: [2, 4, 8, 22], pc: [6], pd: [3, 7, 9, 11], pne: [1, 5] },
    9: { pn: [3, 6, 9], pc: [1, 2, 5], pd: [4, 7, 8, 11, 22], pne: [] },
    11: { pn: [1, 5, 7, 11], pc: [4, 8, 22], pd: [2, 3, 6, 9], pne: [] },
    22: { pn: [2, 4, 8, 22], pc: [6, 7, 11], pd: [1, 3, 5, 9], pne: [] },
  };

  const calcularCompatibilidad = () => {

    const tabla = tablaCompatibilidad[sumaTotalReducida1];
    if (tabla.pn.includes(sumaTotalReducida2)) {
      setCompatibilidad('Pareja Natural');
      setImagenCompatibilidad(parejaNatural);
      setTextoCompatibilidad(parejaNaturalText);
    } else if (tabla.pc.includes(sumaTotalReducida2)) {
      setCompatibilidad('Pareja Compatible');
      setImagenCompatibilidad(parejaCompatible);
      setTextoCompatibilidad(parejaCompatibleText);
    } else if (tabla.pd.includes(sumaTotalReducida2)) {
      setCompatibilidad('Pareja Desafío');
      setImagenCompatibilidad(parejaDesafio);
      setTextoCompatibilidad(parejaDesafioText);
    } else if (tabla.pne.includes(sumaTotalReducida2)) {
      setCompatibilidad('Pareja Neutral');
      setImagenCompatibilidad(parejaNeutral);
      setTextoCompatibilidad(parejaNeutralText);
    }
  };

  // Habilitar el botón cuando estén completos los campos
  const camposCompletos =
    nombre1 && seleccionarDia1 && seleccionarMes1 && seleccionarYear1 && nombre2 && seleccionarDia2 && seleccionarMes2 && seleccionarYear2;

  return (
    <body>
      <header className="App-header">
        <Container fluid className='d-flex justify-content-center'>
          <img src={logo} alt="Logotipo" style={{ width: '330px', height: 'auto', padding: '10px'}} />
        </Container>
      </header>

      <Container fluid className='background-color'>
        <div className='App background'>
          <Container fluid className='d-flex justify-content-center'>
            <h1 style={{ margin: '10px'}}>Calculadora de parejas</h1>
          </Container>

          <Container className="mt-3">
            <Form>
              <Form.Group className="mb-3" controlId="persona1">
                <Row fluid className="g-2 mt-3">
                  <Col md className="d-flex justify-content-center">
                    <FloatingLabel controlId="LabelNombre1" label="Nombre">
                      <Form.Control type="text" value={nombre1} onChange={cambioNombre1} />
                    </FloatingLabel>
                  </Col>
                  
                    <Col md="auto" className="d-flex justify-content-center">
                      <h1>+</h1>
                    </Col>
                  
                    <Col md className="d-flex justify-content-center">
                      <FloatingLabel controlId="floatingSelectDia1" label="Día de Nacimiento">
                        <Form.Select aria-label="Floating label select example" onChange={cambioDias1}>
                          <option value="">Selecciona el día</option>
                          {diasOpciones}
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  
                    <Col md="auto" className="d-flex justify-content-center">
                      <h1>+</h1>
                    </Col>
                  
                    <Col md className="d-flex justify-content-center">
                      <FloatingLabel controlId="floatingSelectMes1" label="Mes de Nacimiento">
                        <Form.Select aria-label="Floating label select example" onChange={cambioMes1}>
                          <option value="">Selecciona el mes</option>
                          <option value="1">Enero</option>
                          <option value="2">Febrero</option>
                          <option value="3">Marzo</option>
                          <option value="4">Abril</option>
                          <option value="5">Mayo</option>
                          <option value="6">Junio</option>
                          <option value="7">Julio</option>
                          <option value="8">Agosto</option>
                          <option value="9">Septiembre</option>
                          <option value="10">Octubre</option>
                          <option value="11">Noviembre</option>
                          <option value="12">Diciembre</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  
                    <Col md="auto" className="d-flex justify-content-center">
                      <h1>+</h1>
                    </Col>
                  
                    <Col md className="d-flex justify-content-center">
                      <FloatingLabel controlId="floatingSelectYear1" label="Año de Nacimiento">
                        <Form.Select aria-label="Floating label select example" onChange={cambioYear1}>
                          <option value="">Selecciona un año</option>
                          {yearsOpciones}
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  
                    <Col md="auto" className="d-flex justify-content-center">
                      <h1 style={{ margin: '10px'}}> = {sumaTotalReducida1}</h1>
                    </Col>
                
                </Row>
              </Form.Group>

              <Form.Group className="mb-3" controlId="persona2" size="lg">
                <Row className="g-2 mt-3">
                  <Col md className="d-flex justify-content-center">
                    <FloatingLabel controlId="LabelNombre2" label="Nombre">
                      <Form.Control type="text" value={nombre2} onChange={cambioNombre2} />
                    </FloatingLabel>
                  </Col>
                  
                    <Col md="auto" className="d-flex justify-content-center">
                      <h1>+</h1>
                    </Col>
                  
                  
                    <Col md className="d-flex justify-content-center">
                      <FloatingLabel controlId="floatingSelectDia2" label="Día de Nacimiento">
                        <Form.Select aria-label="Floating label select example" onChange={cambioDias2}>
                          <option value="">Selecciona el día</option>
                          {diasOpciones}
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  
                  
                    <Col md="auto" className="d-flex justify-content-center">
                      <h1>+</h1>
                    </Col>
                  
                  
                    <Col md className="d-flex justify-content-center">
                      <FloatingLabel controlId="floatingSelectMes2" label="Mes de Nacimiento">
                        <Form.Select aria-label="Floating label select example" onChange={cambioMes2}>
                          <option value="">Selecciona el mes</option>
                          <option value="1">Enero</option>
                          <option value="2">Febrero</option>
                          <option value="3">Marzo</option>
                          <option value="4">Abril</option>
                          <option value="5">Mayo</option>
                          <option value="6">Junio</option>
                          <option value="7">Julio</option>
                          <option value="8">Agosto</option>
                          <option value="9">Septiembre</option>
                          <option value="10">Octubre</option>
                          <option value="11">Noviembre</option>
                          <option value="12">Diciembre</option>
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  

                  
                    <Col md='auto' className="d-flex justify-content-center">
                      <h1>+</h1>
                    </Col>
                  
                  
                    <Col md className="d-flex justify-content-center">
                      <FloatingLabel controlId="floatingSelectYear2" label="Año de Nacimiento">
                        <Form.Select aria-label="Floating label select example" onChange={cambioYear2}>

                          <option value="">Selecciona un año</option>
                          {yearsOpciones}
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  
                  
                    <Col md="auto" className="d-flex justify-content-center">
                      <h1 style={{ margin: '10px'}}> = {sumaTotalReducida2}</h1>
                    </Col>
                  
                </Row>
              </Form.Group>
            </Form>

            <div className="d-grid gap-2">
              <Button variant="calcular" className="mt-3 mb-3" style={{ backgroundColor: "#693061", color: 'white' }} size="lg" onClick={calcularCompatibilidad} disabled={!camposCompletos}>
                Calcular
              </Button>
            </div>

            {compatibilidad && (
              <Container>
                <Row className="mt-3">
                  <Col md className="d-flex justify-content-center">
                    <h2>Ustedes son: {compatibilidad}</h2>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md className="d-flex justify-content-center">
                    <img src={imagenCompatibilidad} alt={compatibilidad} className="img-fluid" style={{ width: '280px' }} />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md className="d-flex justify-content-center">
                    <p>{textoCompatibilidad}</p>
                  </Col>
                </Row>
              </Container>
            )}
          </Container>
        </div>
      </Container>

      <footer className="text-white text-center">
        <img src={logo} alt="Logotipo" style={{ width: '330px', height: 'auto', padding: '10px' }} />
      </footer>
    
    </body>

  );
};

export default App;
