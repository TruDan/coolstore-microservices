webpackJsonp([44712706562510],{323:function(a,n){a.exports={data:{markdownRemark:{html:'<h1 id="variables"><a href="#variables" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Variables</h1>\n<p>You can pass variables recieved from the client to the execution engine by using the <code class="language-text">Inputs</code> property.</p>\n<blockquote>\n<p>See the <a href="http://graphql.org/learn/queries/#variables">official GraphQL documentation on variables</a></p>\n</blockquote>\n<p>Here is what a query looks like with a variable:</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">query</span> DroidQuery<span class="token punctuation">(</span><span class="token variable">$droidId</span><span class="token punctuation">:</span> String<span class="token operator">!</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  droid<span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> <span class="token variable">$droidId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    id\n    name\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Here is what this query would look like as a JSON request:</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n <span class="token property">"query"</span><span class="token operator">:</span> <span class="token string">"query DroidQuery($droidId: String!) { droid(id: $droidId) { id name } }"</span><span class="token punctuation">,</span>\n <span class="token property">"variables"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n   <span class="token property">"droidId"</span><span class="token operator">:</span> <span class="token string">"1"</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Call <code class="language-text">.ToInputs()</code> to translate JSON variables into a format that the library can work with.</p>\n<div class="gatsby-highlight" data-language="csharp">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">var</span> variablesJson <span class="token operator">=</span> <span class="token comment">// get from request</span>\n<span class="token comment">// `ToInputs` extension method converts the json to the `Inputs` class</span>\n<span class="token keyword">var</span> inputs <span class="token operator">=</span> variablesJson<span class="token punctuation">.</span><span class="token function">ToInputs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nschema<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>_ <span class="token operator">=</span><span class="token operator">></span>\n<span class="token punctuation">{</span>\n  _<span class="token punctuation">.</span>Query <span class="token operator">=</span> <span class="token string">"..."</span><span class="token punctuation">;</span>\n  _<span class="token punctuation">.</span>Inputs <span class="token operator">=</span> inputs<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>',fields:{relativePath:"docs\\getting-started\\variables.md"}},site:{siteMetadata:{githubEditUrl:"https://github.com/graphql-dotnet/graphql-dotnet/edit/master/docs2/site"}}},pathContext:{relativePath:"docs\\getting-started\\variables.md"}}}});
//# sourceMappingURL=path---docs-getting-started-variables-bfaffd92db87a63d39bb.js.map