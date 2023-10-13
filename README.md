# Supermercado Virtual

 _Este é um projeto desenvolvidor no processo seletivo da empresa CREDFRANCO. As tecnologias usadas no desenvolvimento foram:_

## Frontend
- [JavaScript](https://https://www.javascript.com/)
- [Next.js](https://nextjs.org/)
- [Axios](https://axios-http.com/)
- [SWR](https://swr.vercel.app/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucid React](https://github.com/lucidweb/lucid-react)

## Backend
- [Composer](https://getcomposer.org/)
- [PHP](https://https://www.php.net/)
- [Laravel](https://laravel.com/)
- [Laravel Breeze](https://laravel.com/docs/8.x/starter-kits#breeze)
- [Faker](https://github.com/fzaninotto/Faker)

## Banco de Dados
- [Docker](https://www.docker.com/)
- [MySQL](https://www.mysql.com/)

## Visão Geral do Projeto

O projeto Supermercado Virtual é uma aplicação web desenvolvida para simular um supermercado virtual, com funcionalidades para gerentes e clientes.

### Funcionalidades

- **Página de Boas-Vindas**: Uma página de boas-vindas que fornece uma introdução ao aplicativo.

- **Página de Login**: Os usuários podem fazer login com suas credenciais.

- **Página do Gerente**: A página do gerente permite que os gerentes gerenciem o supermercado. Aqui, eles podem:

    - Ver os clientes cadastrados.
    - Visualizar os produtos em promoção cadastrados.
    - Cadastrar novos produtos em promoção.

- **Página do Cliente**: A página do cliente permite que os clientes visualizem os produtos em promoção e troquem seus pontos por produtos em promoção. A cada troca, a pontuação correspondente é descontada da pontuação total do cliente.

### Configuração e Execução do Projeto

Para configurar e executar o projeto, siga as instruções abaixo:

1. Clone o repositório do projeto:

   ```bash
   git clone https://github.com/dropeko/supermarket-app-credfranco.git

2. Instalar Docker:

   ```bash
    # Instale Docker e dependências
    sudo apt-get install docker-ce docker-ce-cli containerd.io

    # Adicionando seu usuário ao grupo de usuários Docker
    sudo groupadd docker

    #  Adiciona seu usuário a este novo grupo
    sudo usermod -aG docker $USER

    # Consultar o status atual do Daemon no Docker
    sudo systemctl status docker

    # Inicializando o Docker
    sudo systemctl start docker

    #Habilitar Daemon do Docker para iniciar durante o boot
    sudo systemctl enable docker


3. Iniciar o servidor SQL (Docker):
   ```bash
    docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:8.0.31
   

4. Iniciar servidor backend:

   ```bash
   cd backend
   php artisan migrate:fresh --seed
   php artisan serve

   # porta localhost:8000 para acessar


5. Iniciar servidor frontend:

   ```bash
    # A partir do diretório ./app
    cd frontend
    npm run dev

    # porta localhost:3000 para acessar
