# Andremograph

Portfólio de uma página para André, feito com Next.js, React, TypeScript e Tailwind CSS. O contato principal é [Instagram](https://www.instagram.com/andremograph/).

## Desenvolvimento

```bash
npm ci
npm run dev
```

Verificações antes de publicar:

```bash
npm run lint
npm run build
```

## Conteúdo

- `app/page.tsx` contém os projetos, textos e a estrutura da página.
- `app/globals.css` contém o visual responsivo preto e dourado.
- `public/videos-web/` contém somente os vídeos selecionados da pasta local de André, compactados quando necessário.
- `public/thumbnails/` contém as capas desses vídeos.

Para adicionar um trabalho, inclua o MP4 compacto e sua capa nas pastas acima e acrescente a entrada em `featured` ou `moreProjects` em `app/page.tsx`. Guarde os arquivos originais de alta resolução fora de `public`. O arquivo original de José Otávio continua na pasta local do usuário; a versão web tem 1080p e cerca de 14 MB.

## Publicação

O repositório GitHub é `andreprofficial23-blip/andremograph-portfolio`. A Vercel está conectada à branch `main`. O domínio principal é `andremograph.com`, com `www.andremograph.com` configurado para redirecionar a ele. O registro A na Hostinger já aponta para a Vercel; a emissão do certificado HTTPS pode levar algum tempo.
