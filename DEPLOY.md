# Deploy no Vercel - Kenylson-Tech

## Pré-requisitos
- Conta no Vercel
- Repositório Git com o código

## Passos para Deploy

### 1. Configuração Automática
O projeto já está configurado com:
- ✅ `vercel.json` - Configuração de build
- ✅ `.vercelignore` - Arquivos para ignorar
- ✅ SPA routing configurado

### 2. Deploy no Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Faça login na sua conta
3. Clique em "New Project"
4. Importe o repositório Git
5. Vercel detectará automaticamente as configurações
6. Clique em "Deploy"

### 3. Configurações Automáticas
- **Build Command**: `NODE_ENV=production npx vite build --config vite.config.prod.ts --mode production`
- **Output Directory**: `dist/public`
- **Node Version**: 18.x ou superior
- **Install Command**: `npm install`

### 3.1 Configurações Manuais (se necessário)
Se o deploy automático falhar, configure manualmente:
1. Build Command: `NODE_ENV=production npx vite build --config vite.config.prod.ts --mode production`
2. Output Directory: `dist/public`
3. Install Command: `npm install`
4. Node.js Version: 18.x

### 4. Resultado
- Site estático totalmente funcional
- Todas as animações 3D funcionando
- Design responsivo para mobile e desktop
- Simulador de segurança interativo

## Observações
- O formulário de contato é apenas frontend (não envia emails)
- Todas as funcionalidades 3D funcionam no navegador
- Site otimizado para performance e SEO

## Solução de Problemas

### Se o build falhar com erro "functions should NOT have fewer than 1 properties":

**PROBLEMA IDENTIFICADO**: O arquivo `vercel.json` anterior tinha um objeto `functions` vazio que não é permitido pelo schema do Vercel.

**SOLUÇÃO APLICADA**: Arquivo `vercel.json` foi corrigido para usar a estrutura correta do Vercel v2.

### Opções de Deploy:

**Opção 1: Configuração Principal (vercel.json)**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "buildCommand": "NODE_ENV=production npx vite build --config vite.config.prod.ts --mode production",
        "outputDirectory": "dist/public"
      }
    }
  ],
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

**Opção 2: Configuração Alternativa (vercel-backup.json)**
Se a primeira opção falhar:
1. Renomeie `vercel.json` para `vercel-old.json`
2. Renomeie `vercel-backup.json` para `vercel.json`
3. Faça novo deploy

**Opção 3: Configuração Manual no Vercel**
1. Acesse configurações do projeto no Vercel
2. Configure:
   - Build Command: `NODE_ENV=production npx vite build --config vite.config.prod.ts --mode production`
   - Output Directory: `dist/public`
   - Install Command: `npm install`
   - Node.js Version: 18.x

### Se o build continuar com timeout (Command exited with 1):

**PROBLEMA**: Build muito lento devido ao tamanho das dependências (Three.js, Lucide Icons, etc.)

**SOLUÇÕES CRIADAS**:

**Opção 4: Configuração Otimizada (vercel-final.json)**
Configuração mais simples e rápida:
```json
{
  "buildCommand": "cd client && npx vite build --config ../vite.config.minimal.ts --mode production",
  "outputDirectory": "dist/public",
  "installCommand": "npm install --production=false",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Opção 5: Build Script Custom**
Use o script `build-vercel.sh` para build otimizado com timeout.

**Arquivos de configuração disponíveis:**
- `vite.config.minimal.ts` - Configuração ultra-otimizada
- `vite.config.simple.ts` - Configuração sem minificação
- `vite.config.prod.ts` - Configuração com chunking manual
- `build-vercel.sh` - Script bash com timeout

### Verificações Gerais:
- Node version no Vercel (usar 18.x ou superior)
- Variáveis de ambiente se necessário
- Logs de build no dashboard do Vercel
- Certificar que o arquivo `.vercelignore` está presente
- Timeout no build: usar configuração minimal ou simpleashboard do Vercel
- Se persistir erro, usar configuração manual