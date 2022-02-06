import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Camisa do Flamengo',
          type: 'withdraw',
          category: 'compras',
          amount: 320,
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Salario',
          type: 'deposit',
          category: 'salario',
          amount: 5000,
          createdAt: new Date()
        },
      ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, req) => {
      const data = JSON.parse(req.requestBody);

      return schema.create('transaction', data)
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
