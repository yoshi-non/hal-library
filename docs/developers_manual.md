# 環境構築

- バージョン
  - node : 16.13.2
  - yarn : 1.22.17

```bash
# パッケージインストール
yarn install

# 開発サーバー起動
yarn dev

# ビルド
yarn build

# ビルド環境サーバー起動
yarn start
```

## 各ライブラリの使用目的

| ライブラリ名 | 使用目的 |
| --- | --- |
| framer-motion | アニメーション |
| @emotion/react | CSS |
| @mui/icons-material @mui/material @emotion/styled @emotion/react | アイコン |
| html2canvas | キャンバス |
| react-pdf --save @types/react-pdf | PDF作成 |