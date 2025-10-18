# Codex Vitae

Codex Vitae — grimório digital: CRUD de personagens para criação e organização de mundos de fantasia.

## Como rodar (local)
### Requisitos
Node 18+, npm, Docker (opcional)

### Com Docker (recomendado)
docker compose up --build

### Rodando manualmente
1. Backend:
   cd backend
   cp .env.example .env
   npm install
   npm run dev

2. Frontend:
   cd frontend
   npm install
   npm run dev

## Tech stack
- Frontend: React + TypeScript + Tailwind
- Backend: Node.js + Express + MongoDB
- Auth: JWT
- DevOps: Docker, GitHub Actions

## Nota do autor
Este projeto é parte do meu portfólio. A proposta é unir boas práticas de engenharia (REST, auth, testes, CI/CD) com identidade criativa — cada personagem é tratada como uma entidade viva.

