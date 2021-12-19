# [tailwindcss](https://tailwindcss.com/)と[alpinejs](https://alpinejs.dev/)を使用した FileMaker の WebViewer 開発テンプレートです。

### 以下の手順で開発を始めて下さい。

1. リポジトリのクローンをダウンロード

```
git clone https://github.com/calafate40/FM_tailwind_alpine.git
```

gitCLI をインストールしていない場合は直接[ダウンロード](https://github.com/calafate40/FM_tailwind_alpine.git)

2. 依存関係のインストール

```
npm install
```

3. tailwindcss をコンパイルして開発開始

```
npm run dev
```

4. エントリーポイント

```
public/index.html
```

## FileMaker への移植方法

VSCode などの IDE で開発した後、FileMaker へは以下の手順で移植して下さい。

#### プロダクションビルド

tailwindcss から必要な css コードのみを public/styles.css に吐き出します。
css スタイルシート, script.js, alpine.js をインラインで埋め込みます。

```
npm run fm
```

### FileMaker 側の設定

#### WebViewer 用のテーブル作成

##### フィールド構成

- [ ] html: text/html コード
- [ ] data: text/FileMaker で収集したデータを収める
- [ ] c_html: 上記を一枚の html に置換する非保存の計算フィールド
- [ ] callName: text/c_html の内容を呼び出す名称

c_html の計算式は

```
Substitute ( html;"\"___DATA___\"";data )
```

となっており、置換対象の文字列は予め gulp.js によって html 内に"**_DATA_**"と記述されている。

##### スクリプトのポイント

- dataAPI を実行で response.data 以下の配列をそのまま data フィールドへ挿入
- 一旦 c_html フィールドを変数$html に入れ、
- web ビューワーの設定 => URL へ移動`"data:text;html," & $html` <= 単純に`"$html"`のみでも可

### IDE 側からコピーするファイル

以下のファイルを丸ごとコピーして FileMaker に貼り付けます。

- [ ] filemaker/index.html => html フィールド

## gitHub 設定

### リモートの削除

```
git remote -v
git remote remove origin
```

メインブランチが master の場合は main に変更して下さい。
git config でデフォルトで変更しておいたほうが良い。

### コミット

```
git add .
git commit -m 'some message'
```

### 新規リポジトリの作成

[gitHub](github.com)でリポジトリを作成

ghCLI をインストールしている場合は以下のコマンドで作成できて便利です。

```
gh repo create [新しい名前]
```

### 新規作成したリポジトリにプッシュ

上記 `gh repo create`で作成した場合は既に remote と紐づいているので、そのまま以下のコマンドで OK

```
git push origin main
```
