# UFScar ESL Configurator

## Descrição

**UFScar ESL Configurator** é um aplicativo desenvolvido para facilitar a geração e configuração de features de Etiquetas Eletrônicas (ESL). Criado e desenvolvido como parte do projeto de mestrado na UFScar, este aplicativo se destaca por sua interface intuitiva e pela capacidade de gerar configurações personalizadas em formato JSON para integração com sistemas de ESL.

**Aluno de Mestrado:** Leonardo Teixeira  
**Orientador:** Prof Dr. Valter Vieira Camargo

## Arquitetura

### Interface de Usuário (UI):

**Formulário de Escolha das Features:**
- Utilização do `ReactiveFormsModule` do Angular para a criação de um formulário dinâmico e reativo.
- Dependendo da resposta do usuário na primeira pergunta, diretivas `*ngIf` são utilizadas para apresentar ou ocultar partes relevantes do formulário.
- As escolhas do usuário direcionam quais campos e opções são apresentados, proporcionando uma experiência personalizada.

**Visualização do Diagrama:**
- Integração com bibliotecas para exibir uma representação visual de diagramas de classes a partir das seleções do usuário.

### Serviços:

**Service de Formulário:** Encarregado de toda a lógica de funcionamento e manipulação do formulário.  
**Service de Diagrama:** Administra as interações e apresentação gráfica com a biblioteca de diagrama escolhida.  

### Modelos (Models):

Classes bem definidas para cada feature, como `ESL_Type`, `Infrastructure` e outras, garantindo uma organização de dados e validação eficiente.

### Rotas (Routing):

Dependendo da complexidade do aplicativo, múltiplas rotas podem ser estabelecidas para segmentar cada parte do processo ou manter uma única rota centralizada.

### Estados (State Management):

Para aplicações de grande escala ou com múltiplos estados, a utilização de `NgRx` ou `NGXS` é considerada para um gerenciamento de estado mais robusto e escalável.

### Estilização e Responsividade:

O uso de bibliotecas como `Angular Material` garante que o aplicativo tenha uma aparência contemporânea e responsiva, adaptando-se a várias dimensões de tela.

### Backend:

Se necessário, um backend robusto e escalável usando `Node.js` com `Express` ou até mesmo soluções como `Firebase` para salvar configurações ou integrar com outros sistemas.

### Testes:

Adoção de `Jasmine` e `Karma` para testes unitários robustos. Para testes end-to-end, a ferramenta `Protractor` é utilizada.

### Outras Considerações:

**Controle de Versão:** Uso do `Git` para controle de versão e plataformas como `GitHub` ou `GitLab` para gerenciamento e colaboração de código.

---

Para contribuições, dúvidas ou feedback, sinta-se à vontade para entrar em contato.
