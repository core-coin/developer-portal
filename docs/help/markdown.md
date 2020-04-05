---
id: markdown
title: Markdown cheatsheet
---

## Headers

```no-highlight
# H1
## H2 (Used for menu title)
### H3 (used for menu sub-title)
#### H4
##### H5
###### H6
```

# H1

<h2>H2 (Used for menu title)</h2>

<h3>H3 (used for menu sub-title)</h3>

#### H4

##### H5

###### H6

## Emphasis

```no-highlight
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
## Superscripts & Subscripts

The &lt;sup&gt; tag defines superscript text, with markdown as `3^rd^`. Superscript text appears half a character above the normal line.

```no-highlight
3^rd^
```
<details>
  <summary>Result</summary>
  3^rd^
</details>

The &lt;sub&gt; tag defines subscript text, with markdown as `H~2~O`. Subscript text appears half a character below the normal line.

```no-highlight
H~2~O
```
<details>
  <summary>Result</summary>
  H~2~O
</details>

## Abbreviations

We support abbreviations (HTML tag &lt;abbr&gt;). Create an abbreviation definition like this:

```no-highlight
*[Core]: Core Blockchain
```

then, elsewhere in the document, write text such as:

```no-highlight
Core network connect...
```

<details>
  <summary>Result</summary>
  [Core]: Core Blockchain
  Core network connect...
</details>

## Insert

The &lt;ins&gt; (`++insert++`) tag defines a text that has been inserted into a document.

```no-highlight
++insert++
```

<details>
  <summary>Result</summary>
  ++insert++
</details>

## Marking

The &lt;mark&gt; (`==mark==`) tag defines marked text.

```no-highlight
==mark==
```

<details>
  <summary>Result</summary>
  ==mark==
</details>

## Lists

```no-highlight
1. First ordered list item
2. Another item
1. Actual numbers don't matter, just that it's a number
4. And another item.  

   Some text that should be aligned with the above item.

* Unordered list can use asterisks

- Or minuses
```

1. First ordered list item
2. Another item
1. Actual numbers don't matter, just that it's a number
4. And another item.  

   Some text that should be aligned with the above item.

* Unordered list can use asterisks

- Or minuses

## Links

There are two ways to create links.

```no-highlight
[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself]

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

<details>
  <summary>Result</summary>

  [I'm an inline-style link](https://www.google.com)

  [I'm a reference-style link][Arbitrary case-insensitive reference text]

  [You can use numbers for reference-style link definitions][1]

  Or leave it empty and use the [link text itself]

  URLs and URLs in angle brackets will automatically get turned into links.
  http://www.example.com or <http://www.example.com> and sometimes
  example.com (but not on Github, for example).

  Some text to show that the reference links can follow later.

  [arbitrary case-insensitive reference text]: https://www.mozilla.org
  [1]: http://slashdot.org
  [link text itself]: http://www.reddit.com
</details>

## Images

```no-highlight
Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/core-coin/developer-portal/raw/master/website/static/img/favicon.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/core-coin/developer-portal/raw/master/website/static/img/favicon.png "Logo Title Text 2"
```

<details>
  <summary>Result</summary>
  Here's our logo (hover to see the title text):

  Inline-style:
  ![alt text](https://github.com/core-coin/developer-portal/raw/master/website/static/img/favicon.png "Logo Title Text 1")

  Reference-style:
  ![alt text][logo]

  [logo]: https://github.com/core-coin/developer-portal/raw/master/website/static/img/favicon.png "Logo Title Text 2"
</details>

## Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and *Markdown X* -- support syntax highlighting.

You can initialize it with:

```no-highlight
``` with or without language and line highlight afterwards {0}
```

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log('This line can be highlighted!');
}
```

## Tables

Tables aren't part of the core Markdown spec, but they are part of GFM and *Markdown Here* supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

```no-highlight
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

<details>
  <summary>Result</summary>
  Colons can be used to align columns.

  | Tables        | Are           | Cool |
  | ------------- |:-------------:| -----:|
  | col 3 is      | right-aligned | $1600 |
  | col 2 is      | centered      |   $12 |
  | zebra stripes | are neat      |    $1 |

  The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

  Markdown | Less | Pretty
  --- | --- | ---
  *Still* | `renders` | **nicely**
  1 | 2 | 3
</details>

## Blockquotes

```no-highlight
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
```

<details>
  <summary>Result</summary>
  > Blockquotes are very handy in email to emulate reply text.
  > This line is part of the same quote.

  Quote break.

  > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

</details>

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

```no-highlight
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>
  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

<details>
  <summary>Description</summary>
  Some description...
</details>
```

<details>
  <summary>Result</summary>
  <dl>
    <dt>Definition list</dt>
    <dd>Is something people use sometimes.</dd>
    <dt>Markdown in HTML</dt>
    <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
  </dl>

  <details>
    <summary>Description</summary>
    Some description...
  </details>
</details>

## Horizontal Rule

```
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
```

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

## Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You'll soon learn to get what you want. "Markdown Toggle" is your friend.

Here are some things to try out:

```
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
```

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also begins a separate paragraph, but...  
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

(Technical note: *Markdown Here* uses GFM line breaks, so there's no need to use MD's two-space line breaks.)

## YouTube Videos

They can't be added directly but you can add an image with a link to the video like this:

```no-highlight
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg"
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
```

Or, in pure Markdown, but losing the image sizing and border:

```no-highlight
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

## TeX Mathematical Formulae

A full description of TeX math symbols is beyond the scope of this cheatsheet. Here's a [good reference](https://en.wikibooks.org/wiki/LaTeX/Mathematics), and you can try stuff out on [CodeCogs](https://www.codecogs.com/latex/eqneditor.php). You can also play with formulae in the Markdown Here options page.

Here are some examples to try out:

```
$-b \pm \sqrt{b^2 - 4ac} \over 2a$
$x = a_0 + \frac{1}{a_1 + \frac{1}{a_2 + \frac{1}{a_3 + a_4}}}$
$\forall x \in X, \quad \exists y \leq \epsilon$
```

The beginning and ending dollar signs (`$`) are the delimiters for the TeX markup, or (`$$`) for blocks.

## Multi-language code blocks

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="js"
  values={[
    { label: 'JavaScript', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Java', value: 'java', },
  ]
}>
<TabItem value="js">

```js
function helloWorld() {
  console.log('Hello, world!');
}
```

</TabItem>
<TabItem value="py">

```py
def hello_world():
  print 'Hello, world!'
```

</TabItem>
<TabItem value="java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
</Tabs>

## Admonitions

You can create multiple panels with `:::`name of panel: `note, tip, important, caution, warning` and ending with `:::`. Your message need be in the middle.

<details>
  <summary>Result</summary>

:::note
This is a note
:::

:::tip
This is a tip
:::

:::important
This is important
:::

:::caution
This is a caution
:::

:::warning
This is a warning
:::

</details>
