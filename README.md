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
- `public/videos-web/` contém os vídeos compactos exibidos sob demanda.
- `public/thumbnails/` contém as capas dos vídeos locais.
- Os demais trabalhos usam vídeos do YouTube, carregados apenas depois do clique.

Para adicionar um trabalho local, inclua o MP4 compacto e sua capa nas pastas acima e acrescente a entrada em `moreProjects` em `app/page.tsx`. Guarde os arquivos originais de alta resolução fora de `public`.

## Publicação

O repositório GitHub é `andreprofficial23-blip/andremograph-portfolio`. A Vercel deve estar conectada à branch `main`. O domínio principal pretendido é `andremograph.com`; configure também `www.andremograph.com` como redirecionamento. Confira no painel da Vercel os registros DNS exigidos antes de alterar a zona DNS na Hostinger.
