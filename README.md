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

tailwindcss から必要な css コードのみを public/styles.css に吐き出します。。

```
npm run prod
```

### FileMaker 側の設定

#### WebViewer 用のテーブル作成

##### フィールド構成

- [ ] html: text/html コード
- [ ] css: text/css コード
- [ ] js: text/javaScript コード
- [ ] library: text/javascript ライブラリーコード
- [ ] c_html: 上記を一枚の html に置換する非保存の計算フィールド
- [ ] callName: text/c_html の内容を呼び出す名称 => executeSQL で使用
- [ ] discription: text/簡単な説明

c_html の計算式は

```
Substitute ( html;
["<style></style>" ; "<style>" & css & "</style>"];
["dev";"prod"];
["'___JS___'";js];
["'___ALPINE___'";library]
)
```

となっており、置換対象の文字列は予め html 内に記述されている。

##### スクリプトのポイント

- 変数`$html` に c_html を格納
- 変数`$data` に表示させる JSON を格納（データが無い時も`$data`は必ずロードするようにしているので、テキストを挿入で{name: yourName}という何かの JSON 文字列を挿入しておく）
- Substitute 関数`Substitute ( $html; "'___DATA___'";$data )`としてロードに必要なデータを投入
- web ビューワーの設定 => URL へ移動`"data:text;html," & $html`

### IDE 側からコピーするファイル

以下のファイルを丸ごとコピーして FileMaker に貼り付けます。

- [ ] public/index.html => html フィールド
- [ ] public/style.css => css フィールド
- [ ] src/script.js => js フィールド
- [ ] node_modules/alpinejs/dist/cdn.min.js => library フィールド

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
