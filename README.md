# アメ何個いる？(Pokémon Sleep アメ・経験値シミュレータ)
https://kerusu-1984.github.io/pokemon-sleep-calc-required-candy/
## 開発

パッケージを `npm install` (or `pnpm install` or `yarn`) でインストールしたら、以下のコマンドで開発サーバを起動する

```bash
npm run dev
```

### 経験値テーブルの追加

`src/lib/index.ts`のnextExpsを修正する

## デプロイ

mainブランチにpushしたらGithub Actionsが自動でビルドし、Github Pagesにデプロイしてくれる
