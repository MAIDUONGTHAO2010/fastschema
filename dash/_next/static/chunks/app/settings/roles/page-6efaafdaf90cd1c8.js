(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{78571:function(e,r,t){Promise.resolve().then(t.bind(t,95412))},95412:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var n=t(57437),s=t(8792),a=t(34560),l=t(15e3),i=t(75006),c=t(60834),d=t(30142),o=t(39997),u=t(27453),m=t(33277),f=t(90688),x=t(95453);let p=e=>[{accessorKey:"id",enableSorting:!0,enableHiding:!0,filterFn:d.i,header:e=>{let{column:r}=e;return(0,n.jsx)(o.Q,{column:r,title:"ID"})},cell:e=>{let{row:r}=e;return(0,n.jsx)("div",{className:"flex space-x-2",children:(0,n.jsx)("span",{className:"w-[60px] truncate font-medium",children:r.getValue("id")})})}},{accessorKey:"name",enableSorting:!0,enableHiding:!0,filterFn:d.i,header:e=>{let{column:r}=e;return(0,n.jsx)(o.Q,{column:r,title:"Name"})},cell:e=>{let{row:r}=e;return(0,n.jsx)("div",{className:"flex space-x-2",children:(0,n.jsx)("span",{className:"max-w-[500px] truncate font-medium",children:r.getValue("name")})})}},{accessorKey:"description",enableSorting:!0,enableHiding:!0,filterFn:d.i,header:e=>{let{column:r}=e;return(0,n.jsx)(o.Q,{column:r,title:"Description"})},cell:e=>{let{row:r}=e;return(0,n.jsx)("div",{className:"flex space-x-2",children:(0,n.jsx)("span",{className:"max-w-[500px] truncate font-medium",children:r.getValue("description")})})}},{accessorKey:"root",header:e=>{let{column:r}=e;return(0,n.jsx)(o.Q,{column:r,title:"Root"})},cell:e=>{let{row:r}=e;return(0,n.jsx)("div",{className:"w-[80px]",children:r.getValue("root")?(0,n.jsx)(m.C,{children:"Root"}):null})},filterFn:(e,r,t)=>t===e.getValue(r),enableSorting:!0,enableHiding:!0},{accessorKey:"type",header:e=>{let{column:r}=e;return(0,n.jsx)(o.Q,{column:r,title:"Type"})},cell:e=>{let{row:r}=e,t=[1,2,3].includes(r.getValue("id"))?(0,n.jsx)(m.C,{children:"System"}):(0,n.jsx)(m.C,{variant:"secondary",children:"User"});return(0,n.jsx)("div",{className:"w-[80px]",children:t})},filterFn:(e,r,t)=>t===e.getValue(r),enableSorting:!1,enableHiding:!0},{accessorKey:"created_at",filterFn:d.i,header:e=>{let{column:r}=e;return(0,n.jsx)(o.Q,{column:r,title:"Created at"})},cell:e=>{let{row:r}=e;return(0,n.jsx)("div",{children:r.getValue("created_at")})},enableSorting:!0,enableHiding:!0},{id:"actions",cell:r=>{let{row:t}=r,a=t.original;return(0,n.jsxs)("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[(0,n.jsx)(s.default,{href:"/settings/roles/edit?id=".concat(a.id),className:"cursor-pointer hover:underline",children:"Edit"}),![1,2,3].includes(a.id)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.Z,{orientation:"vertical"}),(0,n.jsx)("button",{className:"cursor-pointer hover:underline text-red-800",onClick:async()=>{if(confirm("Are you sure you want to delete this role: ".concat(a.name,"?")))try{await (0,f.Rd)(a.id),u.h4.success("Role ".concat(a.name," deleted")),await e()}catch(e){u.h4.error(e.message)}},children:"Delete"})]})]})}}];var g=t(57654),h=t(76540),v=t(70769),j=t(2265);function b(){let{data:e,isLoading:r,error:t,refetch:d}=(0,h.a)({queryKey:["roles"],queryFn:f.xv}),o=p(d);return((0,j.useEffect)(()=>((0,a.D8)({title:"Roles list",description:"List of all roles.",breadcrumbs:[{name:"Settings",path:"/settings"},{name:"Roles",path:"/settings/roles"}],actions:[(0,n.jsx)(s.default,{href:"/settings/roles/edit",children:(0,n.jsx)(g.z,{size:"sm",icon:(0,n.jsx)(v.Z,{className:"mr-2 h-4 w-4"}),children:"New Role"})},"create")]}),a.D8),[]),r)?(0,n.jsx)(i.g,{}):t?(0,n.jsx)(l.T,{error:t}):(0,n.jsx)(c.i,{data:e,columns:o,getRowId:e=>e.name,filterTitle:"Filter roles"})}},15e3:function(e,r,t){"use strict";t.d(r,{T:function(){return c}});var n=t(57437),s=t(29069),a=t(62985),l=t(95601),i=t.n(l);let c=e=>{var r;let{title:t,description:l,error:c}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:null!=t?t:"Error"})}),(0,n.jsxs)(s.bZ,{variant:"destructive",children:[(0,n.jsx)(a.Z,{size:16,className:"mr-2"}),(0,n.jsx)(s.Cd,{children:null!=t?t:"Error"}),(null==c?void 0:c.message)||l&&(0,n.jsx)(s.X,{children:null!==(r=null==c?void 0:c.message)&&void 0!==r?r:l})]})]})}},30142:function(e,r,t){"use strict";t.d(r,{i:function(){return n}});let n=(e,r,t)=>String(e.getValue(r)).toLocaleLowerCase().includes(String(t).toLocaleLowerCase())},39997:function(e,r,t){"use strict";t.d(r,{Q:function(){return c}});var n=t(57437),s=t(62177),a=t(34645),l=t(22169),i=t(57654);function c(e){let{column:r,title:t,className:c}=e;if(!r.getCanSort())return(0,n.jsx)("div",{className:(0,l.cn)(c),children:t});let d=(0,n.jsx)(s.jnn,{className:"ml-2 h-4 w-4"});return"desc"===r.getIsSorted()&&(d=(0,n.jsx)(s.veu,{className:"ml-2 h-4 w-4"})),"asc"===r.getIsSorted()&&(d=(0,n.jsx)(s.Hf3,{className:"ml-2 h-4 w-4"})),(0,n.jsx)("div",{className:(0,l.cn)("flex items-center space-x-2",c),children:(0,n.jsxs)(a.h_,{children:[(0,n.jsx)(a.$F,{asChild:!0,children:(0,n.jsxs)(i.z,{variant:"ghost",size:"sm",className:"-ml-3 h-8 data-[state=open]:bg-accent",children:[(0,n.jsx)("span",{children:t}),d]})}),(0,n.jsxs)(a.AW,{align:"start",children:[(0,n.jsxs)(a.Xi,{onClick:()=>r.toggleSorting(!1),children:[(0,n.jsx)(s.Hf3,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Asc"]}),(0,n.jsxs)(a.Xi,{onClick:()=>r.toggleSorting(!0),children:[(0,n.jsx)(s.veu,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Desc"]}),(0,n.jsx)(a.VD,{}),(0,n.jsxs)(a.Xi,{onClick:()=>r.toggleVisibility(!1),children:[(0,n.jsx)(s.L52,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Hide"]})]})]})})}},34560:function(e,r,t){"use strict";t.d(r,{Sc:function(){return b},D8:function(){return j}});var n=t(57437),s=t(8792),a=t(13571),l=t.n(a),i=t(51919),c=t(2265),d=t(62177),o=t(59143),u=t(22169);let m=c.forwardRef((e,r)=>{let{...t}=e;return(0,n.jsx)("nav",{ref:r,"aria-label":"breadcrumb",...t})});m.displayName="Breadcrumb";let f=c.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("ol",{ref:r,className:(0,u.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",t),...s})});f.displayName="BreadcrumbList";let x=c.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("li",{ref:r,className:(0,u.cn)("inline-flex items-center gap-1.5",t),...s})});x.displayName="BreadcrumbItem";let p=c.forwardRef((e,r)=>{let{asChild:t,className:s,...a}=e,l=t?o.g7:"a";return(0,n.jsx)(l,{ref:r,className:(0,u.cn)("transition-colors hover:text-foreground",s),...a})});p.displayName="BreadcrumbLink";let g=c.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("span",{ref:r,role:"link","aria-disabled":"true","aria-current":"page",className:(0,u.cn)("font-normal text-foreground",t),...s})});g.displayName="BreadcrumbPage";let h=e=>{let{children:r,className:t,...s}=e;return(0,n.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,u.cn)("[&>svg]:size-3.5",t),...s,children:null!=r?r:(0,n.jsx)(d.XCv,{})})};h.displayName="BreadcrumbSeparator";let v={title:"",description:"",breadcrumbs:[],actions:[]},j=e=>{i.ZP.dispatch("pageInfo",null!=e?e:[])},b=()=>{var e,r;let[t,a]=(0,c.useState)(v);(0,c.useEffect)(()=>{i.ZP.on("pageInfo",e=>{a(null!=e?e:v)})},[]);let d=(null==t?void 0:null===(e=t.breadcrumbs)||void 0===e?void 0:e.length)?[{name:"Dash",path:"/"},...null!==(r=t.breadcrumbs)&&void 0!==r?r:[]]:[],o=d.length;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:t.title}),(0,n.jsx)(m,{children:(0,n.jsx)(f,{children:l()(d,e=>e.path).map((e,r)=>{let t=r===o-1;return(0,n.jsxs)(c.Fragment,{children:[(0,n.jsx)(x,{children:t?(0,n.jsx)(g,{children:e.name}):(0,n.jsx)(p,{asChild:!0,children:(0,n.jsx)(s.default,{href:e.path,children:e.name})})}),!t&&(0,n.jsx)(h,{})]},e.path)})})}),(t.title||t.description)&&(0,n.jsxs)("div",{className:"flex items-center justify-between space-y-2 w-full",children:[(0,n.jsxs)("div",{children:[t.title&&(0,n.jsx)("h1",{className:"text-lg font-semibold md:text-2xl",children:t.title}),t.description&&(0,n.jsx)("p",{className:"text-muted-foreground",children:t.description})]}),(0,n.jsx)("div",{className:"ml-auto mr-4 flex gap-2",children:t.actions})]})]})}},29069:function(e,r,t){"use strict";t.d(r,{Cd:function(){return d},X:function(){return o},bZ:function(){return c}});var n=t(57437),s=t(2265),a=t(57742),l=t(22169);let i=(0,a.j)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),c=s.forwardRef((e,r)=>{let{className:t,variant:s,...a}=e;return(0,n.jsx)("div",{ref:r,role:"alert",className:(0,l.cn)(i({variant:s}),t),...a})});c.displayName="Alert";let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("h5",{ref:r,className:(0,l.cn)("mb-1 font-medium leading-none tracking-tight",t),...s})});d.displayName="AlertTitle";let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)("div",{ref:r,className:(0,l.cn)("text-sm [&_p]:leading-relaxed",t),...s})});o.displayName="AlertDescription"},33277:function(e,r,t){"use strict";t.d(r,{C:function(){return i}});var n=t(57437);t(2265);var s=t(57742),a=t(22169);let l=(0,s.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:r,variant:t,...s}=e;return(0,n.jsx)("div",{className:(0,a.cn)(l({variant:t}),r),...s})}},26739:function(e,r,t){"use strict";t.d(r,{di:function(){return x},e8:function(){return o},fu:function(){return m},mY:function(){return c},rb:function(){return u},sZ:function(){return d},zz:function(){return f}});var n=t(57437),s=t(2265),a=t(62177),l=t(9160),i=t(22169);t(9208);let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(l.mY,{ref:r,className:(0,i.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",t),...s})});c.displayName=l.mY.displayName;let d=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,n.jsx)(a._Ve,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,n.jsx)(l.mY.Input,{ref:r,className:(0,i.cn)("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",t),...s})]})});d.displayName=l.mY.Input.displayName;let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(l.mY.List,{ref:r,className:(0,i.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",t),...s})});o.displayName=l.mY.List.displayName;let u=s.forwardRef((e,r)=>(0,n.jsx)(l.mY.Empty,{ref:r,className:"py-6 text-center text-sm",...e}));u.displayName=l.mY.Empty.displayName;let m=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(l.mY.Group,{ref:r,className:(0,i.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",t),...s})});m.displayName=l.mY.Group.displayName;let f=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(l.mY.Separator,{ref:r,className:(0,i.cn)("-mx-1 h-px bg-border",t),...s})});f.displayName=l.mY.Separator.displayName;let x=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(l.mY.Item,{ref:r,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled='true']:pointer-events-none data-[disabled='true']:opacity-50",t),...s})});x.displayName=l.mY.Item.displayName},90688:function(e,r,t){"use strict";t.d(r,{Rd:function(){return i},cY:function(){return a},jh:function(){return c},x$:function(){return l},xv:function(){return s}});var n=t(84971);let s=async()=>(0,n.dX)("/role"),a=async e=>{var r;if(!e)return null;let t=await (0,n.dX)("/role/".concat(e));return t.permissions=(null!==(r=t.permissions)&&void 0!==r?r:[]).map(e=>e.resource),t},l=async(e,r)=>(r||(delete e.$add,delete e.$clear),r?await (0,n.qb)("/role/".concat(r),e):await (0,n.SO)("/role",e)),i=e=>(0,n.HG)("/role/".concat(e)),c=async()=>o(d(await (0,n.dX)("/role/resources"))),d=e=>e.filter(e=>{var r;return!e.whitelist&&((null==e?void 0:null===(r=e.resources)||void 0===r?void 0:r.length)&&(e.resources=d(e.resources)),!0)}),o=e=>e.filter(e=>{var r,t;return(!e.group||null!=e&&null!==(r=e.resources)&&void 0!==r&&!!r.length)&&((null==e?void 0:null===(t=e.resources)||void 0===t?void 0:t.length)&&(e.resources=o(e.resources)),!0)})}},function(e){e.O(0,[310,637,872,792,571,32,732,998,160,156,704,834,971,69,744],function(){return e(e.s=78571)}),_N_E=e.O()}]);