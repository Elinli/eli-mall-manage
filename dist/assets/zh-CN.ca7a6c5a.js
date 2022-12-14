var o = Object.defineProperty,
  C = Object.defineProperties
var A = Object.getOwnPropertyDescriptors
var F = Object.getOwnPropertySymbols
var l = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable
var t = (E, u, e) =>
    u in E ? o(E, u, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (E[u] = e),
  a = (E, u) => {
    for (var e in u || (u = {})) l.call(u, e) && t(E, e, u[e])
    if (F) for (var e of F(u)) c.call(u, e) && t(E, e, u[e])
    return E
  },
  r = (E, u) => C(E, A(u))
import { g as i } from './helper.13c6fa4f.js'
import { z as B } from './index.b73a18cc.js'
const s = {
    okText: '\u786E\u8BA4',
    closeText: '\u5173\u95ED',
    cancelText: '\u53D6\u6D88',
    loadingText: '\u52A0\u8F7D\u4E2D...',
    saveText: '\u4FDD\u5B58',
    delText: '\u5220\u9664',
    resetText: '\u91CD\u7F6E',
    searchText: '\u641C\u7D22',
    queryText: '\u67E5\u8BE2',
    inputText: '\u8BF7\u8F93\u5165',
    chooseText: '\u8BF7\u9009\u62E9',
    redo: '\u5237\u65B0',
    back: '\u8FD4\u56DE',
    light: '\u4EAE\u8272\u4E3B\u9898',
    dark: '\u9ED1\u6697\u4E3B\u9898',
  },
  n = Object.freeze(
    Object.defineProperty({ __proto__: null, default: s }, Symbol.toStringTag, { value: 'Module' }),
  ),
  m = {
    dashboard: 'Dashboard',
    about: '\u5173\u4E8E',
    workbench: '\u5DE5\u4F5C\u53F0',
    analysis: '\u5206\u6790\u9875',
  },
  D = Object.freeze(
    Object.defineProperty({ __proto__: null, default: m }, Symbol.toStringTag, { value: 'Module' }),
  ),
  d = {
    charts: {
      baiduMap: '\u767E\u5EA6\u5730\u56FE',
      aMap: '\u9AD8\u5FB7\u5730\u56FE',
      googleMap: '\u8C37\u6B4C\u5730\u56FE',
      charts: '\u56FE\u8868',
      map: '\u5730\u56FE',
      line: '\u6298\u7EBF\u56FE',
      pie: '\u997C\u56FE',
    },
    comp: {
      comp: '\u7EC4\u4EF6',
      basic: '\u57FA\u7840\u7EC4\u4EF6',
      transition: '\u52A8\u753B\u7EC4\u4EF6',
      countTo: '\u6570\u5B57\u52A8\u753B',
      scroll: '\u6EDA\u52A8\u7EC4\u4EF6',
      scrollBasic: '\u57FA\u7840\u6EDA\u52A8',
      scrollAction: '\u6EDA\u52A8\u51FD\u6570',
      virtualScroll: '\u865A\u62DF\u6EDA\u52A8',
      tree: 'Tree',
      treeBasic: '\u57FA\u7840\u6811',
      editTree: '\u53EF\u641C\u7D22/\u5DE5\u5177\u680F',
      actionTree: '\u51FD\u6570\u64CD\u4F5C\u793A\u4F8B',
      modal: '\u5F39\u7A97\u6269\u5C55',
      drawer: '\u62BD\u5C49\u6269\u5C55',
      desc: '\u8BE6\u60C5\u7EC4\u4EF6',
      lazy: '\u61D2\u52A0\u8F7D\u7EC4\u4EF6',
      lazyBasic: '\u57FA\u7840\u793A\u4F8B',
      lazyTransition: '\u52A8\u753B\u6548\u679C',
      verify: '\u9A8C\u8BC1\u7EC4\u4EF6',
      verifyDrag: '\u62D6\u62FD\u6821\u9A8C',
      verifyRotate: '\u56FE\u7247\u8FD8\u539F',
      qrcode: '\u4E8C\u7EF4\u7801\u7EC4\u4EF6',
      strength: '\u5BC6\u7801\u5F3A\u5EA6\u7EC4\u4EF6',
      upload: '\u4E0A\u4F20\u7EC4\u4EF6',
      loading: 'Loading',
      time: '\u76F8\u5BF9\u65F6\u95F4',
      cropperImage: '\u56FE\u7247\u88C1\u526A',
      cardList: '\u5361\u7247\u5217\u8868',
    },
    editor: {
      editor: '\u7F16\u8F91\u5668',
      jsonEditor: 'Json\u7F16\u8F91\u5668',
      markdown: 'markdown\u7F16\u8F91\u5668',
      tinymce: '\u5BCC\u6587\u672C',
      tinymceBasic: '\u57FA\u7840\u4F7F\u7528',
      tinymceForm: '\u5D4C\u5165form',
    },
    excel: {
      excel: 'Excel',
      customExport: '\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F',
      jsonExport: 'JSON\u6570\u636E\u5BFC\u51FA',
      arrayExport: 'Array\u6570\u636E\u5BFC\u51FA',
      importExcel: '\u5BFC\u5165',
    },
    feat: {
      feat: '\u529F\u80FD',
      icon: '\u56FE\u6807',
      sessionTimeout: '\u767B\u5F55\u8FC7\u671F',
      tabs: '\u6807\u7B7E\u9875\u64CD\u4F5C',
      tabDetail: '\u6807\u7B7E\u8BE6\u60C5\u9875',
      print: '\u6253\u5370',
      contextMenu: '\u53F3\u952E\u83DC\u5355',
      download: '\u6587\u4EF6\u4E0B\u8F7D',
      clickOutSide: 'ClickOutSide\u7EC4\u4EF6',
      imgPreview: '\u56FE\u7247\u9884\u89C8',
      copy: '\u526A\u5207\u677F',
      msg: '\u6D88\u606F\u63D0\u793A',
      watermark: '\u6C34\u5370',
      ripple: '\u6C34\u6CE2\u7EB9',
      fullScreen: '\u5168\u5C4F',
      errorLog: '\u9519\u8BEF\u65E5\u5FD7',
      tab: 'Tab\u5E26\u53C2',
      tab1: 'Tab\u5E26\u53C21',
      tab2: 'Tab\u5E26\u53C22',
      menu: 'Menu\u5E26\u53C2',
      menu1: 'Menu\u5E26\u53C21',
      menu2: 'Menu\u5E26\u53C22',
      ws: 'websocket\u6D4B\u8BD5',
      breadcrumb: '\u9762\u5305\u5C51\u5BFC\u822A',
      breadcrumbFlat: '\u5E73\u7EA7\u6A21\u5F0F',
      breadcrumbFlatDetail: '\u5E73\u7EA7\u8BE6\u60C5',
      breadcrumbChildren: '\u5C42\u7EA7\u6A21\u5F0F',
      breadcrumbChildrenDetail: '\u5C42\u7EA7\u8BE6\u60C5',
    },
    flow: { name: '\u56FE\u5F62\u7F16\u8F91\u5668', flowChart: '\u6D41\u7A0B\u56FE' },
    form: {
      form: 'Form',
      basic: '\u57FA\u7840\u8868\u5355',
      useForm: 'useForm',
      refForm: 'RefForm',
      advancedForm: '\u53EF\u6536\u7F29\u8868\u5355',
      ruleForm: '\u8868\u5355\u9A8C\u8BC1',
      dynamicForm: '\u52A8\u6001\u8868\u5355',
      customerForm: '\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      appendForm: '\u8868\u5355\u589E\u5220\u793A\u4F8B',
    },
    iframe: {
      frame: '\u5916\u90E8\u9875\u9762',
      antv: 'antVue\u6587\u6863(\u5185\u5D4C)',
      doc: '\u9879\u76EE\u6587\u6863(\u5185\u5D4C)',
      docExternal: '\u9879\u76EE\u6587\u6863(\u5916\u94FE)',
    },
    level: { level: '\u591A\u7EA7\u83DC\u5355' },
    page: {
      page: '\u9875\u9762',
      form: '\u8868\u5355\u9875',
      formBasic: '\u57FA\u7840\u8868\u5355',
      formStep: '\u5206\u6B65\u8868\u5355',
      formHigh: '\u9AD8\u7EA7\u8868\u5355',
      desc: '\u8BE6\u60C5\u9875',
      descBasic: '\u57FA\u7840\u8BE6\u60C5\u9875',
      descHigh: '\u9AD8\u7EA7\u8BE6\u60C5\u9875',
      result: '\u7ED3\u679C\u9875',
      resultSuccess: '\u6210\u529F\u9875',
      resultFail: '\u5931\u8D25\u9875',
      account: '\u4E2A\u4EBA\u9875',
      accountCenter: '\u4E2A\u4EBA\u4E2D\u5FC3',
      accountSetting: '\u4E2A\u4EBA\u8BBE\u7F6E',
      exception: '\u5F02\u5E38\u9875',
      netWorkError: '\u7F51\u7EDC\u9519\u8BEF',
      notData: '\u65E0\u6570\u636E',
      list: '\u5217\u8868\u9875',
      listCard: '\u5361\u7247\u5217\u8868',
      listBasic: '\u6807\u51C6\u5217\u8868',
      listSearch: '\u641C\u7D22\u5217\u8868',
    },
    permission: {
      permission: '\u6743\u9650\u7BA1\u7406',
      front: '\u57FA\u4E8E\u524D\u7AEF\u6743\u9650',
      frontPage: '\u9875\u9762\u6743\u9650',
      frontBtn: '\u6309\u94AE\u6743\u9650',
      frontTestA: '\u6743\u9650\u6D4B\u8BD5\u9875A',
      frontTestB: '\u6743\u9650\u6D4B\u8BD5\u9875B',
      back: '\u57FA\u4E8E\u540E\u53F0\u6743\u9650',
      backPage: '\u9875\u9762\u6743\u9650',
      backBtn: '\u6309\u94AE\u6743\u9650',
    },
    setup: { page: '\u5F15\u5BFC\u9875' },
    system: {
      moduleName: '\u7CFB\u7EDF\u7BA1\u7406',
      account: '\u8D26\u53F7\u7BA1\u7406',
      accountDetail: '\u8D26\u53F7\u8BE6\u60C5',
      password: '\u4FEE\u6539\u5BC6\u7801',
      dept: '\u90E8\u95E8\u7BA1\u7406',
      menu: '\u83DC\u5355\u7BA1\u7406',
      role: '\u89D2\u8272\u7BA1\u7406',
    },
    table: {
      table: 'Table',
      basic: '\u57FA\u7840\u8868\u683C',
      treeTable: '\u6811\u5F62\u8868\u683C',
      fetchTable: '\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B',
      fixedColumn: '\u56FA\u5B9A\u5217',
      customerCell: '\u81EA\u5B9A\u4E49\u5217',
      formTable: '\u5F00\u542F\u641C\u7D22\u533A\u57DF',
      useTable: 'UseTable',
      refTable: 'RefTable',
      multipleHeader: '\u591A\u7EA7\u8868\u5934',
      mergeHeader: '\u5408\u5E76\u5355\u5143\u683C',
      expandTable: '\u53EF\u5C55\u5F00\u8868\u683C',
      fixedHeight: '\u5B9A\u9AD8/\u5934\u90E8\u81EA\u5B9A\u4E49',
      footerTable: '\u8868\u5C3E\u884C\u5408\u8BA1',
      editCellTable: '\u53EF\u7F16\u8F91\u5355\u5143\u683C',
      editRowTable: '\u53EF\u7F16\u8F91\u884C',
      authColumn: '\u6743\u9650\u5217',
    },
    employ: { employmgt: '\u804C\u5DE5\u7BA1\u7406' },
  },
  b = Object.freeze(
    Object.defineProperty({ __proto__: null, default: d }, Symbol.toStringTag, { value: 'Module' }),
  ),
  p = {
    charts: {
      baiduMap: '\u767E\u5EA6\u5730\u56FE',
      aMap: '\u9AD8\u5FB7\u5730\u56FE',
      googleMap: '\u8C37\u6B4C\u5730\u56FE',
      charts: '\u56FE\u8868',
      map: '\u5730\u56FE',
      line: '\u6298\u7EBF\u56FE',
      pie: '\u997C\u56FE',
    },
    comp: {
      comp: '\u7EC4\u4EF6',
      basic: '\u57FA\u7840\u7EC4\u4EF6',
      transition: '\u52A8\u753B\u7EC4\u4EF6',
      countTo: '\u6570\u5B57\u52A8\u753B',
      scroll: '\u6EDA\u52A8\u7EC4\u4EF6',
      scrollBasic: '\u57FA\u7840\u6EDA\u52A8',
      scrollAction: '\u6EDA\u52A8\u51FD\u6570',
      virtualScroll: '\u865A\u62DF\u6EDA\u52A8',
      tree: 'Tree',
      treeBasic: '\u57FA\u7840\u6811',
      editTree: '\u53EF\u641C\u7D22/\u5DE5\u5177\u680F',
      actionTree: '\u51FD\u6570\u64CD\u4F5C\u793A\u4F8B',
      modal: '\u5F39\u7A97\u6269\u5C55',
      drawer: '\u62BD\u5C49\u6269\u5C55',
      desc: '\u8BE6\u60C5\u7EC4\u4EF6',
      lazy: '\u61D2\u52A0\u8F7D\u7EC4\u4EF6',
      lazyBasic: '\u57FA\u7840\u793A\u4F8B',
      lazyTransition: '\u52A8\u753B\u6548\u679C',
      verify: '\u9A8C\u8BC1\u7EC4\u4EF6',
      verifyDrag: '\u62D6\u62FD\u6821\u9A8C',
      verifyRotate: '\u56FE\u7247\u8FD8\u539F',
      qrcode: '\u4E8C\u7EF4\u7801\u7EC4\u4EF6',
      strength: '\u5BC6\u7801\u5F3A\u5EA6\u7EC4\u4EF6',
      upload: '\u4E0A\u4F20\u7EC4\u4EF6',
      loading: 'Loading',
      time: '\u76F8\u5BF9\u65F6\u95F4',
      cropperImage: '\u56FE\u7247\u88C1\u526A',
      cardList: '\u5361\u7247\u5217\u8868',
    },
    editor: {
      editor: '\u7F16\u8F91\u5668',
      jsonEditor: 'Json\u7F16\u8F91\u5668',
      markdown: 'markdown\u7F16\u8F91\u5668',
      tinymce: '\u5BCC\u6587\u672C',
      tinymceBasic: '\u57FA\u7840\u4F7F\u7528',
      tinymceForm: '\u5D4C\u5165form',
    },
    excel: {
      excel: 'Excel',
      customExport: '\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F',
      jsonExport: 'JSON\u6570\u636E\u5BFC\u51FA',
      arrayExport: 'Array\u6570\u636E\u5BFC\u51FA',
      importExcel: '\u5BFC\u5165',
    },
    feat: {
      feat: '\u529F\u80FD',
      icon: '\u56FE\u6807',
      sessionTimeout: '\u767B\u5F55\u8FC7\u671F',
      tabs: '\u6807\u7B7E\u9875\u64CD\u4F5C',
      tabDetail: '\u6807\u7B7E\u8BE6\u60C5\u9875',
      print: '\u6253\u5370',
      contextMenu: '\u53F3\u952E\u83DC\u5355',
      download: '\u6587\u4EF6\u4E0B\u8F7D',
      clickOutSide: 'ClickOutSide\u7EC4\u4EF6',
      imgPreview: '\u56FE\u7247\u9884\u89C8',
      copy: '\u526A\u5207\u677F',
      msg: '\u6D88\u606F\u63D0\u793A',
      watermark: '\u6C34\u5370',
      ripple: '\u6C34\u6CE2\u7EB9',
      fullScreen: '\u5168\u5C4F',
      errorLog: '\u9519\u8BEF\u65E5\u5FD7',
      tab: 'Tab\u5E26\u53C2',
      tab1: 'Tab\u5E26\u53C21',
      tab2: 'Tab\u5E26\u53C22',
      menu: 'Menu\u5E26\u53C2',
      menu1: 'Menu\u5E26\u53C21',
      menu2: 'Menu\u5E26\u53C22',
      ws: 'websocket\u6D4B\u8BD5',
      breadcrumb: '\u9762\u5305\u5C51\u5BFC\u822A',
      breadcrumbFlat: '\u5E73\u7EA7\u6A21\u5F0F',
      breadcrumbFlatDetail: '\u5E73\u7EA7\u8BE6\u60C5',
      breadcrumbChildren: '\u5C42\u7EA7\u6A21\u5F0F',
      breadcrumbChildrenDetail: '\u5C42\u7EA7\u8BE6\u60C5',
    },
    flow: { name: '\u56FE\u5F62\u7F16\u8F91\u5668', flowChart: '\u6D41\u7A0B\u56FE' },
    form: {
      form: 'Form',
      basic: '\u57FA\u7840\u8868\u5355',
      useForm: 'useForm',
      refForm: 'RefForm',
      advancedForm: '\u53EF\u6536\u7F29\u8868\u5355',
      ruleForm: '\u8868\u5355\u9A8C\u8BC1',
      dynamicForm: '\u52A8\u6001\u8868\u5355',
      customerForm: '\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      appendForm: '\u8868\u5355\u589E\u5220\u793A\u4F8B',
    },
    iframe: {
      frame: '\u5916\u90E8\u9875\u9762',
      antv: 'antVue\u6587\u6863(\u5185\u5D4C)',
      doc: '\u9879\u76EE\u6587\u6863(\u5185\u5D4C)',
      docExternal: '\u9879\u76EE\u6587\u6863(\u5916\u94FE)',
    },
    level: { level: '\u591A\u7EA7\u83DC\u5355' },
    page: {
      page: '\u9875\u9762',
      form: '\u8868\u5355\u9875',
      formBasic: '\u57FA\u7840\u8868\u5355',
      formStep: '\u5206\u6B65\u8868\u5355',
      formHigh: '\u9AD8\u7EA7\u8868\u5355',
      desc: '\u8BE6\u60C5\u9875',
      descBasic: '\u57FA\u7840\u8BE6\u60C5\u9875',
      descHigh: '\u9AD8\u7EA7\u8BE6\u60C5\u9875',
      result: '\u7ED3\u679C\u9875',
      resultSuccess: '\u6210\u529F\u9875',
      resultFail: '\u5931\u8D25\u9875',
      account: '\u4E2A\u4EBA\u9875',
      accountCenter: '\u4E2A\u4EBA\u4E2D\u5FC3',
      accountSetting: '\u4E2A\u4EBA\u8BBE\u7F6E',
      exception: '\u5F02\u5E38\u9875',
      netWorkError: '\u7F51\u7EDC\u9519\u8BEF',
      notData: '\u65E0\u6570\u636E',
      list: '\u5217\u8868\u9875',
      listCard: '\u5361\u7247\u5217\u8868',
      listBasic: '\u6807\u51C6\u5217\u8868',
      listSearch: '\u641C\u7D22\u5217\u8868',
    },
    permission: {
      permission: '\u6743\u9650\u7BA1\u7406',
      front: '\u57FA\u4E8E\u524D\u7AEF\u6743\u9650',
      frontPage: '\u9875\u9762\u6743\u9650',
      frontBtn: '\u6309\u94AE\u6743\u9650',
      frontTestA: '\u6743\u9650\u6D4B\u8BD5\u9875A',
      frontTestB: '\u6743\u9650\u6D4B\u8BD5\u9875B',
      back: '\u57FA\u4E8E\u540E\u53F0\u6743\u9650',
      backPage: '\u9875\u9762\u6743\u9650',
      backBtn: '\u6309\u94AE\u6743\u9650',
    },
    setup: { page: '\u5F15\u5BFC\u9875' },
    system: {
      moduleName: '\u7CFB\u7EDF\u7BA1\u7406',
      account: '\u8D26\u53F7\u7BA1\u7406',
      accountDetail: '\u8D26\u53F7\u8BE6\u60C5',
      password: '\u4FEE\u6539\u5BC6\u7801',
      dept: '\u90E8\u95E8\u7BA1\u7406',
      menu: '\u83DC\u5355\u7BA1\u7406',
      role: '\u89D2\u8272\u7BA1\u7406',
    },
    table: {
      table: 'Table',
      basic: '\u57FA\u7840\u8868\u683C',
      treeTable: '\u6811\u5F62\u8868\u683C',
      fetchTable: '\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B',
      fixedColumn: '\u56FA\u5B9A\u5217',
      customerCell: '\u81EA\u5B9A\u4E49\u5217',
      formTable: '\u5F00\u542F\u641C\u7D22\u533A\u57DF',
      useTable: 'UseTable',
      refTable: 'RefTable',
      multipleHeader: '\u591A\u7EA7\u8868\u5934',
      mergeHeader: '\u5408\u5E76\u5355\u5143\u683C',
      expandTable: '\u53EF\u5C55\u5F00\u8868\u683C',
      fixedHeight: '\u5B9A\u9AD8/\u5934\u90E8\u81EA\u5B9A\u4E49',
      footerTable: '\u8868\u5C3E\u884C\u5408\u8BA1',
      editCellTable: '\u53EF\u7F16\u8F91\u5355\u5143\u683C',
      editRowTable: '\u53EF\u7F16\u8F91\u884C',
      authColumn: '\u6743\u9650\u5217',
    },
  },
  f = Object.freeze(
    Object.defineProperty({ __proto__: null, default: p }, Symbol.toStringTag, { value: 'Module' }),
  ),
  T = Object.assign({
    './zh-CN/common.ts': n,
    './zh-CN/routes/dashboard.ts': D,
    './zh-CN/routes/demo.ts': b,
    './zh-CN/routes/system.ts': f,
  }),
  x = { message: r(a({}, i(T, 'zh-CN')), { zhCn: B }) }
export { x as default }
