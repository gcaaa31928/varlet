import{_ as t}from"./elevation.37915be7.js";import{o as s,c as e,K as d}from"./vendor.17911535.js";const a={components:{}},c={class:"varlet-site-doc"},l=d(`<h1>Cell</h1><div class="card"><h3>Intro</h3><p>The cell is a single display item in the list.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Cell } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Cell)
</code></pre></div><div class="card"><h3>Basic Usage</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span> This is Cell <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
</code></pre></div><div class="card"><h3>Show Icon</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fire&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;This is Cell&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">extra</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;information&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
</code></pre></div><div class="card"><h3>Show Description</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;This is Cell&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;description&quot;</span> /&gt;</span>
</code></pre></div><div class="card"><h3>Show Border</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">border</span>&gt;</span> This is Cell <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Title</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>desc</code></td><td>Description</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>border</code></td><td>Whether to show border</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>icon-class</code></td><td>Icon className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>title-class</code></td><td>Title className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>desc-class</code></td><td>Description className</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>extra-class</code></td><td>Extra className</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>\u63D2\u69FD</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of cell</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon of cell</td><td><code>-</code></td></tr><tr><td><code>desc</code></td><td>Description of cell</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>Extra of cell</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--cell-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--cell-desc-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--cell-desc-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--cell-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--cell-min-height</code></td><td><code>40px</code></td></tr><tr><td><code>--cell-border-color</code></td><td><code>#bcc2cb</code></td></tr><tr><td><code>--cell-border-left</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-border-right</code></td><td><code>12px</code></td></tr><tr><td><code>--cell-icon-right</code></td><td><code>8px</code></td></tr><tr><td><code>--cell-extra-left</code></td><td><code>8px</code></td></tr></tbody></table></div>`,11),o=[l];function r(n,h,p,i,m,g){return s(),e("div",c,o)}var f=t(a,[["render",r]]);export{f as default};