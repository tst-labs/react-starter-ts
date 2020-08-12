import React from 'react';
import './App.css';
import { Container, Typography } from "@material-ui/core";
import ButtonAppBar from "./layout/ButtonAppBar";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div style={{gridColumnEnd: 'span 12'}}>
          <ButtonAppBar/>
        </div>
        <div style={{gridColumnEnd: 'span 12'}}>
          <Container
            maxWidth="sm"
            style={{
              backgroundColor: '#cfe8fc',
              height: '100%',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Área central da aplicação
            </Typography>
            <a
              href="https://www.tst.jus.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6" gutterBottom>
                Conheça o TST
              </Typography>
            </a>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
