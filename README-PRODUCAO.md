# 🚀 Guia de Produção Local - G.A.M.Q Cyber Security

## 📋 Pré-requisitos
- Node.js 18+ instalado
- NPM ou Yarn
- Todas as dependências instaladas (`npm install`)

## 🎯 Opções de Início

### Opção 1: Script Automático (Recomendado)
```bash
# Windows - Versão Simples
start-local.bat

# Windows - Versão Completa
start-production.bat

# Linux/Mac
chmod +x start-production.sh
./start-production.sh
```

### Opção 2: Comandos Manuais
```bash
# Construir o projeto
npm run build

# Iniciar em porta específica
npm run start:local    # Porta 3000
npm run start:prod     # Porta 5000

# Ou definir porta customizada
PORT=4000 npm run start
```

### Opção 3: Desenvolvimento
```bash
npm run dev
```

## 🌐 Portas Disponíveis

### ✅ Portas Livres Recomendadas:
- **3000** - Padrão React (recomendado)
- **4000** - Alternativa
- **5000** - Configuração original
- **8000** - Alternativa popular
- **8080** - Padrão servidor web

### ❌ Portas Ocupadas no Sistema:
- 135, 139, 445 (Windows Services)
- 5432 (PostgreSQL)
- 2869, 5040, 6463 (Serviços sistema)
- 10243, 42050, 49664-49680 (Windows)

## 🔧 Configuração de Ambiente

### Variáveis de Ambiente:
```bash
NODE_ENV=production    # Modo produção
PORT=3000             # Porta do servidor
```

### Estrutura de Arquivos:
```
dist/
├── index.js          # Servidor compilado
└── public/           # Frontend compilado
    ├── index.html
    ├── assets/
    └── ...
```

## 🚨 Troubleshooting

### Porta Ocupada:
```bash
# Verificar portas em uso
Get-NetTCPConnection -State Listen | Select-Object LocalPort

# Testar porta específica
Test-NetConnection -ComputerName localhost -Port 3000
```

### Erro de Build:
```bash
# Limpar cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Erro de Permissão:
```bash
# Executar como administrador (Windows)
# ou usar sudo (Linux/Mac)
```

## 📱 Acesso
- **Local**: http://localhost:3000
- **Rede**: http://[SEU-IP]:3000
- **API**: http://localhost:3000/api

## 🔒 Segurança
- Aplicação roda em modo produção
- Logs de erro ativados
- Compressão habilitada
- Headers de segurança configurados

## 📊 Monitoramento
- Logs no console
- Métricas de performance
- Status da aplicação em `/api/health`

---
**Desenvolvido por G.A.M.Q Cyber Security** 🔒 