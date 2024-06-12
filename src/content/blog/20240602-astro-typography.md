---
title: Astro で tailwindcss / typography を使用する
description:  "Astro で tailwindcss / typography を使用する"
date: "2024-06-02"
tags: ["astro", "tailwindcss", "typography"]
---

## はじめに

- [tailwindcss\-typography](https://github.com/tailwindlabs/tailwindcss-typography)

tailwindcss / typography は TailwindCSS の公式プラグインです。
インストール・設定したあと、prose というクラスが使用できるようになります。

prose クラスは次のように使用し `<article>` の子要素に対し適用されます。

```html
<article class="prose lg:prose-xl">{{ markdown }}</article>
```

## インストール

npm でプロジェクトに typography プラクインをインストールできます。

```zsh
npm install @tailwindcss/typography
```

次に tailwind.config.js に以下のように設定します。

```astro title="tailwind.config.js" ins={6}
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
```

## 使い方

スタイルを当てたい部分の class にproseを追加します。

```astro
<article class="prose">{{ markdown }}</article>
```

## 要素装飾子

要素装飾子を使って様々なスタイリングができます。

- [Element modifiers \-typography](https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#element-modifiers)

```astro
<article class="prose prose-a:text-blue-600 hover:prose-a:text-blue-500">
  {{ markdown }}
</article>
```

要素装飾子は prose と組み合わせて使用する必要があります。

- [ デフォルト値(style.js \-typography) ](https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js)

## 主な装飾子の使い方

### サイズ修飾子

サイズ修飾子を使用すると、全体的なサイズを調整することができます。

```astro
<article class="prose prose-xl">{{ markdown }}</article>
```

サイズの種類は以下の通り5種類。

| Class     | Body font size  |
|  :-----   |   :-----        |
| prose-sm  | 0.875rem (14px) |
| prose     | 1rem (16px)     |
| prose-lg  | 1.125rem (18px) |
| prose-xl  | 1.25rem (20px)  |
| prose-2xl | 1.5rem (24px)   |


### カラー修飾子

カラー修飾子を使用すると、リンクのカラーを変更することができます。(デフォルトはtext-gray-600)

```astro
<article className="prose prose-indigo">{{ markdown }}</article>
```

| Class        | Link color |
| :-----       |   :----    |
| prose-red    | red.600    |
| prose-yellow | yellow.600 |
| prose-green  | green.600  |
| prose-blue   | blue.600   |
| prose-indigo | indigo.600 |
| prose-purple | purple.600 |
| prose-pink   | pink.600   |

### レスポンシブ対応

通常の Tailwind CSS と同様、レスポンシブ対応も可能です。

```astro
<article class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
  {{ markdown }}
</article>
```

## カスタマイズ

長くなるので `styles/global.css` で定義しておきます。

```astro title="styles/global.css"
article {
  @apply prose prose-neutral max-w-full dark:prose-invert prose-img:mx-auto prose-img:my-auto;
  @apply prose-headings:text-black prose-headings:dark:text-white;
}
```
