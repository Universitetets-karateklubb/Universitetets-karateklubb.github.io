# Heimeside til UKK

Heimesida vert publisert til Github Pages. Publisert side: [ukk.no](https://ukk.no)
Domenet har me kjøpt hjå Domeneshop.

## Korleis bidra

1. **Fork** dette repoet (eller be om tilgang som medlem av organisasjonen) og lag ein ny branch for endringane dine.
2. Rediger innhald:
   - **Enkle endringar** (retta ein skrivefeil, oppdatera ein tekst): rediger fila direkte på Github i nettlesaren.
   - **Større endringar** (nye sider, endra struktur, testa lokalt før publisering): last ned repoet lokalt og rediger i ein teksteditor som VS Code.
3. Send inn endringane som ein **pull request** mot `main`.
4. Når pull requesten er godkjend og merga, vert sida automatisk bygd og publisert på nytt via Github Actions.

### Redigera innhald

Innhald er for det meste skreve i Markdown-formaterte filer (`.md`/`.mdx`) under `src/content/docs/`. Kvar fil vert automatisk ei side på nettstaden, basert på filnamnet og mappestrukturen.

Bilete kan leggjast i `src/assets/` og limast inn i Markdown-filer med ei relativ lenkje.

Statiske filer, som favicon, ligg i `public/`.

### Køyra prosjektet lokalt

Prosjektet brukar [pnpm](https://pnpm.io/) som pakkehandterar. Installer det først dersom du ikkje har det (`npm install -g pnpm`), klona så repoet og køyr:

```
pnpm install
pnpm dev
```

Dette startar ein lokal utviklingsserver på `localhost:4321` der du kan sjå endringane dine live før du sender inn ein pull request.

## 🚀 Prosjektstruktur

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Kommandoar

Alle kommandoar køyrast frå rota av prosjektet, i ein terminal:

| Kommando               | Handling                                          |
| :---------------------- | :------------------------------------------------ |
| `pnpm install`          | Installerer avhengigheiter                        |
| `pnpm dev`              | Startar lokal utviklingsserver på `localhost:4321` |
| `pnpm build`            | Byggjer produksjonssida til `./dist/`              |
| `pnpm preview`          | Førehandsvis den bygde sida lokalt før publisering |
| `pnpm astro ...`        | Køyr CLI-kommandoar som `astro add`, `astro check` |
| `pnpm astro -- --help`  | Vis hjelp for Astro CLI                            |

## 👀 Vil du læra meir?

Sida er bygd med [Astro](https://astro.build) og [Starlight](https://starlight.astro.build/). Sjekk ut [Starlight sine docs](https://starlight.astro.build/) eller [Astro sin dokumentasjon](https://docs.astro.build) for meir informasjon.
