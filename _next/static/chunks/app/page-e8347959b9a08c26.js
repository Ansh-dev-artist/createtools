(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4423:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>I});var a=t(5155),l=t(6394),i=t(2115),n=t(3463),c=t(9795);function r(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,c.QP)((0,n.$)(s))}function d(e){let{children:s,className:t,as:i="h1",animate:n=!1}=e;return n?(0,a.jsx)(l.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:r("leading-tight text-white",t),children:(0,a.jsx)(i,{className:"font-bebas tracking-tight",children:s})}):(0,a.jsx)(i,{className:r("font-bebas tracking-tight leading-tight text-white",t),children:s})}function o(e){let{text:s,className:t}=e,i=s.split(" ");return(0,a.jsx)("div",{className:r("flex flex-wrap gap-2 md:gap-4",t),children:i.map((e,s)=>(0,a.jsx)(l.P.span,{initial:{opacity:0,scale:.8,rotate:10*Math.random()-5},animate:{opacity:1,scale:1,rotate:6*Math.random()-3},transition:{duration:.4,delay:.05*s,type:"spring",stiffness:100},className:r("inline-block font-space text-white",s%3==0&&"text-3xl md:text-4xl font-bold -rotate-1",s%3==1&&"text-xl md:text-2xl font-medium rotate-1",s%3==2&&"text-2xl md:text-3xl font-semibold rotate-2"),children:e},s))})}function x(e){let{topText:s,bottomText:t,className:l}=e;return(0,a.jsxs)("div",{className:r("relative inline-block",l),children:[(0,a.jsx)("span",{className:"block text-4xl md:text-5xl font-bebas tracking-tight leading-none text-white opacity-90",children:s}),(0,a.jsx)("span",{className:"block text-6xl md:text-7xl font-bebas tracking-tight leading-none mt-[-0.2em] text-white",children:t})]})}function m(e){let{number:s,text:t,className:l}=e;return(0,a.jsxs)("div",{className:r("flex items-start gap-3",l),children:[(0,a.jsx)("span",{className:"font-mono text-lg font-bold opacity-50 text-white",children:s}),(0,a.jsx)("h3",{className:"font-dm text-xl font-semibold text-white",children:t})]})}function h(e){let{textItems:s,className:t}=e,[n,c]=i.useState(0);return i.useEffect(()=>{let e=setInterval(()=>{c(e=>(e+1)%s.length)},3e3);return()=>clearInterval(e)},[s.length]),(0,a.jsx)("div",{className:r("h-8 overflow-hidden relative",t),children:s.map((e,t)=>(0,a.jsx)(l.P.div,{initial:{y:40,opacity:0},animate:{y:t===n?0:t===(n-1+s.length)%s.length?-40:40,opacity:+(t===n)},transition:{duration:.5},className:"absolute inset-0 font-mono text-lg text-white",children:e},t))})}var p=t(1066);let b=i.forwardRef((e,s)=>{let{className:t,orientation:l="horizontal",decorative:i=!0,...n}=e;return(0,a.jsx)(p.b,{ref:s,decorative:i,orientation:l,className:r("shrink-0 bg-border","horizontal"===l?"h-[1px] w-full":"h-full w-[1px]",t),...n})});b.displayName=p.b.displayName;let j=i.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:s,className:r("rounded-xl border bg-card text-card-foreground shadow",t),...l})});j.displayName="Card",i.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:s,className:r("flex flex-col space-y-1.5 p-6",t),...l})}).displayName="CardHeader",i.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:s,className:r("font-semibold leading-none tracking-tight",t),...l})}).displayName="CardTitle",i.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:s,className:r("text-sm text-muted-foreground",t),...l})}).displayName="CardDescription";let f=i.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:s,className:r("p-6 pt-0",t),...l})});f.displayName="CardContent",i.forwardRef((e,s)=>{let{className:t,...l}=e;return(0,a.jsx)("div",{ref:s,className:r("flex items-center p-6 pt-0",t),...l})}).displayName="CardFooter";var N=t(8586),y=t(2606);function u(e){let{children:s,className:t="",delay:n=0,duration:c=.5,direction:r="up",distance:d=50,once:o=!0}=e,x=(0,i.useRef)(null),m=(0,N.W)(x,{once:o,margin:"-100px 0px"}),h=(0,y.s)();return(0,i.useEffect)(()=>{m?h.start("visible"):o||h.start("hidden")},[m,h,o]),(0,a.jsx)(l.P.div,{ref:x,initial:"hidden",animate:h,variants:{hidden:{opacity:0,...(()=>{switch(r){case"up":default:return{y:d};case"down":return{y:-d};case"left":return{x:d};case"right":return{x:-d}}})()},visible:{opacity:1,x:0,y:0,transition:{duration:c,delay:n,ease:"easeOut"}}},className:t,children:s})}function g(e){let{text:s,className:t="",speed:n=50,delay:c=0,cursorClassName:r="",showCursor:d=!0}=e,[o,x]=(0,i.useState)(""),[m,h]=(0,i.useState)(!1);(0,y.s)();let p=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e;let t=0,a=()=>{h(!0),e=setInterval(()=>{t<s.length?(x(s.substring(0,t+1)),t++):(clearInterval(e),h(!1))},n)},l=setTimeout(()=>{a()},c);return()=>{clearTimeout(l),clearInterval(e)}},[s,n,c]),(0,a.jsxs)("div",{ref:p,className:"relative inline-block ".concat(t),children:[o,d&&(0,a.jsx)(l.P.span,{animate:{opacity:[1,0]},transition:{repeat:1/0,duration:.8},className:"inline-block h-[1em] w-[0.1em] bg-white ml-1 ".concat(r)})]})}function v(e){let{text:s,className:t="",glitchInterval:n=3e3,glitchDuration:c=200,chars:r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"}=e,[d,o]=(0,i.useState)(s),[x,m]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=setInterval(()=>{if(!x){m(!0);let e=0,t=setInterval(()=>{o(e=>e.split("").map((e,s)=>.2>Math.random()?r[Math.floor(Math.random()*r.length)]:e).join("")),++e>=5&&(clearInterval(t),o(s),m(!1))},c/5)}},n);return()=>{clearInterval(e)}},[s,x,n,c,r]),(0,a.jsx)(l.P.span,{className:"inline-block ".concat(t),initial:{opacity:1},animate:x?{opacity:[1,.8,1]}:{},transition:{duration:.2},children:d})}function w(e){let{text:s,className:t="",preClassName:l="",monoSpaced:i=!0,showLineNumbers:n=!1}=e,c=s.split("\n");return(0,a.jsx)("div",{className:r("bg-zinc-900/50 rounded-sm overflow-x-auto",t),children:(0,a.jsx)("pre",{className:r("p-3 text-gray-300 text-sm whitespace-pre",i&&"font-mono",l),children:n?c.map((e,s)=>(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("span",{className:"w-8 opacity-50 select-none text-right mr-3",children:s+1}),(0,a.jsx)("span",{children:e})]},s)):s})})}function I(){return(0,a.jsxs)("main",{className:"min-h-screen bg-black text-white",children:[(0,a.jsx)("section",{className:"relative min-h-[70vh] flex flex-col justify-center items-center px-4 pt-24 pb-12",children:(0,a.jsxs)(l.P.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7},className:"text-center z-10 max-w-5xl mx-auto",children:[(0,a.jsx)(v,{text:"THE AI CREATIVITY PARADOX",className:"text-7xl md:text-9xl font-bebas tracking-tight leading-[0.9] mb-8 block"}),(0,a.jsx)("p",{className:"text-xl md:text-2xl font-dm opacity-70 max-w-2xl mx-auto mb-6",children:"Why Cost Isn't the Real Barrier in the Generative Revolution"}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(g,{text:"70% of Artists Miss the $0-$500/Month AI Goldmine",className:"text-xl md:text-2xl font-space text-white/80 mb-8",speed:40,delay:1e3})}),(0,a.jsx)("div",{className:"mt-12",children:(0,a.jsx)(l.P.button,{whileHover:{scale:1.05},className:"px-6 py-3 bg-red-600 rounded-sm text-white text-base",children:"Learn More"})})]})}),(0,a.jsxs)("section",{className:"max-w-5xl mx-auto px-4 py-16",children:[(0,a.jsx)(u,{delay:.2,children:(0,a.jsxs)("div",{className:"mb-16",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 mb-2 opacity-70",children:[(0,a.jsx)("div",{className:"h-px bg-white/30 w-12"}),(0,a.jsx)("span",{className:"font-mono text-sm uppercase",children:"The Great"})]}),(0,a.jsx)(x,{topText:"AI",bottomText:"COST ILLUSION",className:"mb-8"}),(0,a.jsx)("p",{className:"text-xl md:text-2xl mb-8 font-dm leading-relaxed opacity-80 max-w-3xl",children:"The most surprising truth about AI tools? The best ones are often completely free. Yet most creatives remain trapped paying for premium services, unaware of the powerful open-source alternatives."}),(0,a.jsx)("div",{className:"mt-6 flex items-center",children:(0,a.jsx)("div",{className:"flex items-center justify-center mr-4",children:(0,a.jsx)(j,{className:"w-full backdrop-blur-sm bg-zinc-900/50 border border-zinc-800",children:(0,a.jsxs)(f,{className:"pt-6 pb-6",children:[(0,a.jsx)("h3",{className:"text-xl font-space font-bold mb-4",children:'Debunking the "Expensive AI" Myth'}),(0,a.jsx)("div",{className:"h-12",children:(0,a.jsx)(h,{textItems:["Stable Diffusion: FREE","Mistral-7B: FREE","RIFE: FREE","DeepFilterNet: FREE"],className:"mb-4 text-lg"})}),(0,a.jsx)("p",{className:"text-base opacity-70 font-dm mt-2",children:"Open-source alternatives exist for nearly every premium AI tool"})]})})})})]})}),(0,a.jsx)(b,{className:"my-16 bg-zinc-800"}),(0,a.jsx)(u,{delay:.3,direction:"up",children:(0,a.jsxs)("div",{id:"analysis",className:"mb-16",children:[(0,a.jsx)(d,{as:"h2",className:"text-4xl md:text-5xl mb-8",children:"PRICE SPECTRUM ANALYSIS"}),(0,a.jsx)("div",{className:"overflow-x-auto mt-8 mb-8",children:(0,a.jsxs)("table",{className:"w-full border-collapse text-lg",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b border-zinc-800",children:[(0,a.jsx)("th",{className:"py-4 text-left font-space font-bold",children:"Task Type"}),(0,a.jsx)("th",{className:"py-4 text-left font-space font-bold",children:"Free/Open Source"}),(0,a.jsx)("th",{className:"py-4 text-left font-space font-bold",children:"Paid Solutions"}),(0,a.jsx)("th",{className:"py-4 text-left font-space font-bold",children:"Price Gap"})]})}),(0,a.jsxs)("tbody",{className:"font-dm",children:[(0,a.jsxs)(l.P.tr,{className:"border-b border-zinc-800",initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},children:[(0,a.jsx)("td",{className:"py-4",children:"Image Gen"}),(0,a.jsx)("td",{className:"py-4",children:"Flux • Stable Diffusion XL"}),(0,a.jsx)("td",{className:"py-4",children:"Midjourney • DALL-E 3"}),(0,a.jsx)("td",{className:"py-4",children:"$0 vs $10-$100/mo"})]}),(0,a.jsxs)(l.P.tr,{className:"border-b border-zinc-800",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:[(0,a.jsx)("td",{className:"py-4",children:"Video Edit"}),(0,a.jsx)("td",{className:"py-4",children:"RIFE • E2FGVI"}),(0,a.jsx)("td",{className:"py-4",children:"Runway ML • Pika"}),(0,a.jsx)("td",{className:"py-4",children:"$0 vs $15-$500/mo"})]}),(0,a.jsxs)(l.P.tr,{className:"border-b border-zinc-800",initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},children:[(0,a.jsx)("td",{className:"py-4",children:"Audio"}),(0,a.jsx)("td",{className:"py-4",children:"Bark • DeepFilterNet"}),(0,a.jsx)("td",{className:"py-4",children:"ElevenLabs • Adobe Podcast"}),(0,a.jsx)("td",{className:"py-4",children:"$0 vs $5-$300/mo"})]}),(0,a.jsxs)(l.P.tr,{className:"border-b border-zinc-800",initial:{opacity:0},animate:{opacity:1},transition:{delay:.7},children:[(0,a.jsx)("td",{className:"py-4",children:"Text"}),(0,a.jsx)("td",{className:"py-4",children:"Mistral-7B • LlamaIndex"}),(0,a.jsx)("td",{className:"py-4",children:"ChatGPT-4 • Claude"}),(0,a.jsx)("td",{className:"py-4",children:"$0 vs $20-$500/mo"})]})]})]})}),(0,a.jsx)("div",{className:"mt-8 bg-zinc-900 p-6 rounded-md",children:(0,a.jsxs)("p",{className:"font-bold font-space flex items-center text-lg",children:[(0,a.jsx)("span",{className:"text-3xl mr-3 text-red-500",children:"→"}),"Key Insight: The average creative needs <$50/mo in paid tools when strategically combining OSS alternatives."]})})]})})]}),(0,a.jsx)("section",{className:"max-w-5xl mx-auto px-4 py-16",children:(0,a.jsx)(u,{delay:.2,children:(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 mb-2 opacity-70",children:[(0,a.jsx)("div",{className:"h-px bg-white/30 w-12"}),(0,a.jsx)("span",{className:"font-mono text-sm uppercase",children:"Section"})]}),(0,a.jsx)(d,{as:"h2",className:"text-4xl md:text-6xl mb-3",children:"THE REAL BARRIERS"}),(0,a.jsx)("p",{className:"text-xl font-playfair italic opacity-80 mb-16",children:"Why 70% of Creatives Remain AI-Illiterate"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16 mb-16",children:[(0,a.jsx)(u,{delay:.4,direction:"left",children:(0,a.jsxs)("div",{children:[(0,a.jsx)(m,{number:"01",text:"The GitHub Abyss",className:"mb-6 text-2xl"}),(0,a.jsx)("p",{className:"mb-6 font-dm text-lg opacity-80 leading-relaxed",children:"Most AI art tools begin life as Jupyter notebooks (87% of new models debut on GitHub). Yet:"}),(0,a.jsxs)("ul",{className:"list-disc pl-5 space-y-4 font-dm text-lg opacity-80",children:[(0,a.jsx)("li",{children:"68% of artists can't run basic Python environments"}),(0,a.jsx)("li",{children:"92% never check AI research papers (primary source of new techniques)"})]}),(0,a.jsx)(w,{text:'# Example Jupyter cell from a model repo\nimport torch\nfrom diffusers import StableDiffusionPipeline\n\nmodel_id = "stabilityai/stable-diffusion-xl-base-1.0"\npipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16)',className:"mt-6",showLineNumbers:!0})]})}),(0,a.jsx)(u,{delay:.6,direction:"right",children:(0,a.jsxs)("div",{children:[(0,a.jsx)(m,{number:"02",text:"The Packaging Paradox",className:"mb-6 text-2xl"}),(0,a.jsx)("p",{className:"mb-6 font-dm text-lg opacity-80",children:"Developers vs Artists Priorities:"}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-8",children:[(0,a.jsxs)("div",{className:"bg-zinc-900/50 p-6 rounded-sm",children:[(0,a.jsx)("h4",{className:"font-space font-bold mb-4 text-xl",children:"Developer Priorities"}),(0,a.jsxs)("ul",{className:"list-disc pl-5 space-y-3 font-dm text-base opacity-70",children:[(0,a.jsx)("li",{children:"Model accuracy"}),(0,a.jsx)("li",{children:"Code flexibility"}),(0,a.jsx)("li",{children:"Benchmark scores"})]})]}),(0,a.jsxs)("div",{className:"bg-zinc-900/50 p-6 rounded-sm",children:[(0,a.jsx)("h4",{className:"font-space font-bold mb-4 text-xl",children:"Artist Needs"}),(0,a.jsxs)("ul",{className:"list-disc pl-5 space-y-3 font-dm text-base opacity-70",children:[(0,a.jsx)("li",{children:"One-click install"}),(0,a.jsx)("li",{children:"Pre-built UI"}),(0,a.jsx)("li",{children:"Tutorial videos"})]})]})]})]})})]}),(0,a.jsx)(u,{children:(0,a.jsxs)("div",{className:"bg-zinc-900 p-8 rounded-sm shadow-lg mb-16",children:[(0,a.jsx)("h3",{className:"font-bebas text-3xl mb-4",children:"CASE STUDY"}),(0,a.jsxs)("p",{className:"font-dm text-xl leading-relaxed",children:["Stable Diffusion's WebUI (Automatic1111) became",(0,a.jsx)(v,{text:"430%",className:"text-2xl font-bold mx-2 text-red-500",glitchInterval:2e3}),"more popular after community packaging."]})]})})]})})}),(0,a.jsxs)("section",{className:"max-w-5xl mx-auto px-4 py-16",children:[(0,a.jsx)(u,{children:(0,a.jsxs)("div",{className:"mb-12",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 mb-4 opacity-70",children:[(0,a.jsx)("div",{className:"h-px bg-white/30 w-12"}),(0,a.jsx)("span",{className:"font-mono text-sm uppercase",children:"Hidden Knowledge"})]}),(0,a.jsx)(d,{as:"h2",className:"text-4xl md:text-5xl mb-6",children:"TOOL DISCOVERY CRISIS"}),(0,a.jsx)(o,{text:"The Hidden Cost of Not Knowing",className:"mb-16 text-3xl"}),(0,a.jsx)("div",{className:"bg-zinc-900/50 p-1 mb-16",children:(0,a.jsx)(w,{text:'// What most creators think\ntype AIOptions = {\n  cost: "high" | "very-high"\n  accessibility: "limited"\n  knowledge: "proprietary"\n}\n\n// What\'s actually available\ntype RealityCheck = {\n  cost: "free" | "minimal"\n  accessibility: "open-source"\n  knowledge: "community-developed"\n}',className:"text-base",showLineNumbers:!0,monoSpaced:!0})})]})}),(0,a.jsx)(u,{delay:.3,children:(0,a.jsxs)("div",{className:"mb-16",children:[(0,a.jsx)("h3",{className:"font-space text-2xl font-bold mb-8",children:"Common Mispricing Perceptions"}),(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsx)("table",{className:"w-full border-collapse text-lg",children:(0,a.jsxs)("tbody",{className:"font-dm",children:[(0,a.jsxs)("tr",{className:"border-b border-zinc-800",children:[(0,a.jsx)("td",{className:"py-6 pr-8",children:(0,a.jsx)("span",{className:"text-2xl font-bold",children:'"$500/mo"'})}),(0,a.jsx)("td",{className:"py-6 pr-8 text-center",children:(0,a.jsx)("span",{className:"text-2xl font-bold text-green-500",children:"Free"})}),(0,a.jsx)("td",{className:"py-6 pl-4",children:(0,a.jsx)("span",{className:"text-lg",children:"GFPGAN (face restoration) • CLIPSeg (text-guided editing)"})})]}),(0,a.jsxs)("tr",{className:"border-b border-zinc-800",children:[(0,a.jsx)("td",{className:"py-6 pr-8",children:(0,a.jsx)("span",{className:"text-2xl font-bold",children:'"$100/mo"'})}),(0,a.jsx)("td",{className:"py-6 pr-8 text-center",children:(0,a.jsx)("span",{className:"text-2xl font-bold text-green-500",children:"$5"})}),(0,a.jsx)("td",{className:"py-6 pl-4",children:(0,a.jsx)("span",{className:"text-lg",children:"CoquiTTS (voice cloning) + RIFE (slow-mo video)"})})]}),(0,a.jsxs)("tr",{className:"border-b border-zinc-800",children:[(0,a.jsx)("td",{className:"py-6 pr-8",children:(0,a.jsx)("span",{className:"text-2xl font-bold",children:'"Proprietary"'})}),(0,a.jsx)("td",{className:"py-6 pr-8 text-center",children:(0,a.jsx)("span",{className:"text-2xl font-bold text-green-500",children:"Open Source"})}),(0,a.jsx)("td",{className:"py-6 pl-4",children:(0,a.jsx)("span",{className:"text-lg",children:"Adobe Firefly ($4.99/credit) vs SDXL Turbo (free real-time gen)"})})]})]})})})]})}),(0,a.jsx)(u,{delay:.4,children:(0,a.jsxs)("div",{className:"mb-20",children:[(0,a.jsx)("h3",{className:"font-space text-2xl font-bold mb-8",children:"Discovery Pathways"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,a.jsx)(j,{className:"bg-zinc-900/60 border-zinc-800 hover:bg-zinc-900/80 transition-all",children:(0,a.jsxs)(f,{className:"pt-8 pb-8",children:[(0,a.jsx)(l.P.div,{className:"text-5xl mb-4 opacity-30 font-mono",animate:{opacity:[.3,.6,.3]},transition:{repeat:1/0,duration:3},children:"01"}),(0,a.jsx)("p",{className:"font-dm font-bold text-2xl mb-2",children:"arXiv-sanity.com"}),(0,a.jsx)("p",{className:"text-lg opacity-70",children:"(research papers)"})]})}),(0,a.jsx)(j,{className:"bg-zinc-900/60 border-zinc-800 hover:bg-zinc-900/80 transition-all",children:(0,a.jsxs)(f,{className:"pt-8 pb-8",children:[(0,a.jsx)(l.P.div,{className:"text-5xl mb-4 opacity-30 font-mono",animate:{opacity:[.3,.6,.3]},transition:{repeat:1/0,duration:3,delay:1},children:"02"}),(0,a.jsx)("p",{className:"font-dm font-bold text-2xl mb-2",children:"AIModels.fyi"}),(0,a.jsx)("p",{className:"text-lg opacity-70",children:"(tool search engine)"})]})}),(0,a.jsx)(j,{className:"bg-zinc-900/60 border-zinc-800 hover:bg-zinc-900/80 transition-all",children:(0,a.jsxs)(f,{className:"pt-8 pb-8",children:[(0,a.jsx)(l.P.div,{className:"text-5xl mb-4 opacity-30 font-mono",animate:{opacity:[.3,.6,.3]},transition:{repeat:1/0,duration:3,delay:2},children:"03"}),(0,a.jsx)("p",{className:"font-dm font-bold text-2xl mb-2",children:"CivitAI"}),(0,a.jsx)("p",{className:"text-lg opacity-70",children:"(community model hub)"})]})})]})]})})]}),(0,a.jsx)("section",{className:"max-w-5xl mx-auto px-4 py-16",children:(0,a.jsxs)(u,{children:[(0,a.jsx)(v,{text:"STRATEGIC HYBRID AI STACKS",className:"text-6xl md:text-7xl font-bebas tracking-tight leading-none mb-6",glitchInterval:4e3}),(0,a.jsx)("p",{className:"text-xl md:text-2xl font-dm opacity-80 mb-16 max-w-3xl",children:"Balancing free & paid tools for maximum productivity"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-20",children:[(0,a.jsx)(u,{delay:.2,direction:"up",children:(0,a.jsx)(j,{className:"bg-zinc-900/50 border-zinc-800 h-full",children:(0,a.jsxs)(f,{className:"pt-8 pb-8",children:[(0,a.jsx)("h3",{className:"font-bebas text-3xl mb-6",children:"FREE TIER"}),(0,a.jsxs)("ul",{className:"list-disc pl-5 space-y-4 font-dm text-lg opacity-80",children:[(0,a.jsx)("li",{children:"SDXL Turbo + GFPGAN"}),(0,a.jsx)("li",{children:"Track-Anything + E2FGVI"}),(0,a.jsx)("li",{children:"Bark + DeepFilterNet"}),(0,a.jsx)("li",{children:"Mistral-7B + LangChain"})]}),(0,a.jsx)("p",{className:"text-base mt-6 font-mono opacity-60 bg-zinc-800/50 p-2 inline-block",children:"Perfect for hobbyists"})]})})}),(0,a.jsx)(u,{delay:.3,direction:"up",children:(0,a.jsx)(j,{className:"bg-zinc-900/50 border-zinc-800 h-full",children:(0,a.jsxs)(f,{className:"pt-8 pb-8",children:[(0,a.jsx)("h3",{className:"font-bebas text-3xl mb-6",children:"WORTH PAYING FOR"}),(0,a.jsxs)("ul",{className:"space-y-6 font-dm text-lg opacity-80",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"text-xl font-bold block",children:"Midjourney"}),(0,a.jsx)("span",{className:"text-base opacity-70 bg-zinc-800/50 px-2 py-0.5 rounded-sm",children:"$10"}),(0,a.jsx)("span",{className:"block mt-1 text-base opacity-80",children:"For pixel-perfect briefs"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"text-xl font-bold block",children:"ElevenLabs"}),(0,a.jsx)("span",{className:"text-base opacity-70 bg-zinc-800/50 px-2 py-0.5 rounded-sm",children:"$5"}),(0,a.jsx)("span",{className:"block mt-1 text-base opacity-80",children:"Client-facing voiceovers"})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"text-xl font-bold block",children:"Runway ML"}),(0,a.jsx)("span",{className:"text-base opacity-70 bg-zinc-800/50 px-2 py-0.5 rounded-sm",children:"$15"}),(0,a.jsx)("span",{className:"block mt-1 text-base opacity-80",children:"Frame-consistent video"})]})]})]})})}),(0,a.jsx)(u,{delay:.4,direction:"up",children:(0,a.jsx)(j,{className:"bg-zinc-900/50 border-zinc-800 h-full",children:(0,a.jsxs)(f,{className:"pt-8 pb-8",children:[(0,a.jsx)("h3",{className:"font-bebas text-3xl mb-6",children:"CLOUD HACKS"}),(0,a.jsx)("p",{className:"font-dm text-lg opacity-80 mb-6",children:"Use free Colab instances for heavy-duty tasks:"}),(0,a.jsxs)("ul",{className:"list-disc pl-5 space-y-4 font-dm text-base opacity-80",children:[(0,a.jsx)("li",{children:"Video inpainting"}),(0,a.jsx)("li",{children:"Multi-image LoRA training"}),(0,a.jsx)("li",{children:"Large audio restoration"})]}),(0,a.jsx)("p",{className:"text-base mt-6 font-mono opacity-60 bg-zinc-800/50 p-2 inline-block",children:"Save on compute costs"})]})})})]})]})})]})}},8245:(e,s,t)=>{Promise.resolve().then(t.bind(t,4423))}},e=>{var s=s=>e(e.s=s);e.O(0,[781,441,587,358],()=>s(8245)),_N_E=e.O()}]);