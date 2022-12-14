var n = Object.defineProperty,
  c = Object.defineProperties
var s = Object.getOwnPropertyDescriptors
var r = Object.getOwnPropertySymbols
var m = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable
var o = (t, e, a) =>
    e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[e] = a),
  i = (t, e) => {
    for (var a in e || (e = {})) m.call(e, a) && o(t, a, e[a])
    if (r) for (var a of r(e)) d.call(e, a) && o(t, a, e[a])
    return t
  },
  l = (t, e) => c(t, s(e))
import { g as u } from './helper.13c6fa4f.js'
import { e as p } from './index.b73a18cc.js'
const b = {
    okText: 'OK',
    closeText: 'Close',
    cancelText: 'Cancel',
    loadingText: 'Loading...',
    saveText: 'Save',
    delText: 'Delete',
    resetText: 'Reset',
    searchText: 'Search',
    queryText: 'Search',
    inputText: 'Please enter',
    chooseText: 'Please choose',
    redo: 'Refresh',
    back: 'Back',
    light: 'Light',
    dark: 'Dark',
  },
  g = Object.freeze(
    Object.defineProperty({ __proto__: null, default: b }, Symbol.toStringTag, { value: 'Module' }),
  ),
  f = { dashboard: 'Dashboard', about: 'About', workbench: 'Workbench', analysis: 'Analysis' },
  h = Object.freeze(
    Object.defineProperty({ __proto__: null, default: f }, Symbol.toStringTag, { value: 'Module' }),
  ),
  T = {
    charts: {
      baiduMap: 'Baidu map',
      aMap: 'A map',
      googleMap: 'Google map',
      charts: 'Chart',
      map: 'Map',
      line: 'Line',
      pie: 'Pie',
    },
    comp: {
      comp: 'Component',
      basic: 'Basic',
      transition: 'Animation',
      countTo: 'Count To',
      scroll: 'Scroll',
      scrollBasic: 'Basic',
      scrollAction: 'Scroll Function',
      virtualScroll: 'Virtual Scroll',
      tree: 'Tree',
      treeBasic: 'Basic',
      editTree: 'Searchable/toolbar',
      actionTree: 'Function operation',
      modal: 'Modal',
      drawer: 'Drawer',
      desc: 'Desc',
      lazy: 'Lazy',
      lazyBasic: 'Basic',
      lazyTransition: 'Animation',
      verify: 'Verify',
      verifyDrag: 'Drag ',
      verifyRotate: 'Picture Restore',
      qrcode: 'QR code',
      strength: 'Password strength',
      upload: 'Upload',
      loading: 'Loading',
      time: 'Relative Time',
      cropperImage: 'Cropper Image',
      cardList: 'Card List',
    },
    editor: {
      editor: 'Editor',
      jsonEditor: 'Json editor',
      markdown: 'Markdown editor',
      tinymce: 'Rich text',
      tinymceBasic: 'Basic',
      tinymceForm: 'embedded form',
    },
    excel: {
      excel: 'Excel',
      customExport: 'Select export format',
      jsonExport: 'JSON data export',
      arrayExport: 'Array data export',
      importExcel: 'Import',
    },
    feat: {
      feat: 'Page Function',
      icon: 'Icon',
      tabs: 'Tabs',
      tabDetail: 'Tab Detail',
      sessionTimeout: 'Session Timeout',
      print: 'Print',
      contextMenu: 'Context Menu',
      download: 'Download',
      clickOutSide: 'ClickOutSide',
      imgPreview: 'Picture Preview',
      copy: 'Clipboard',
      msg: 'Message prompt',
      watermark: 'Watermark',
      ripple: 'Ripple',
      fullScreen: 'Full Screen',
      errorLog: 'Error Log',
      tab: 'Tab with parameters',
      tab1: 'Tab with parameter 1',
      tab2: 'Tab with parameter 2',
      menu: 'Menu with parameters',
      menu1: 'Menu with parameters 1',
      menu2: 'Menu with parameters 2',
      ws: 'Websocket test',
      breadcrumb: 'Breadcrumbs',
      breadcrumbFlat: 'Flat Mode',
      breadcrumbFlatDetail: 'Flat mode details',
      breadcrumbChildren: 'Level mode',
      breadcrumbChildrenDetail: 'Level mode detail',
    },
    flow: { name: 'Graphics editor', flowChart: 'FlowChart' },
    form: {
      form: 'Form',
      basic: 'Basic',
      useForm: 'useForm',
      refForm: 'RefForm',
      advancedForm: 'Shrinkable',
      ruleForm: 'Form validation',
      dynamicForm: 'Dynamic',
      customerForm: 'Custom',
      appendForm: 'Append',
    },
    iframe: {
      frame: 'External',
      antv: 'antVue doc (embedded)',
      doc: 'Project doc (embedded)',
      docExternal: 'Project doc (external)',
    },
    level: { level: 'MultiMenu' },
    page: {
      page: 'Page',
      form: 'Form',
      formBasic: 'Basic Form',
      formStep: 'Step Form',
      formHigh: 'Advanced Form',
      desc: 'Details',
      descBasic: 'Basic Details',
      descHigh: 'Advanced Details',
      result: 'Result',
      resultSuccess: 'Success',
      resultFail: 'Failed',
      account: 'Personal',
      accountCenter: 'Personal Center',
      accountSetting: 'Personal Settings',
      exception: 'Exception',
      netWorkError: 'Network Error',
      notData: 'No data',
      list: 'List page',
      listCard: 'Card list',
      basic: 'Basic list',
      listBasic: 'Basic list',
      listSearch: 'Search list',
    },
    permission: {
      permission: 'Permission',
      front: 'front-end',
      frontPage: 'Page',
      frontBtn: 'Button',
      frontTestA: 'Test page A',
      frontTestB: 'Test page B',
      back: 'background',
      backPage: 'Page',
      backBtn: 'Button',
    },
    setup: { page: 'Intro page' },
    system: {
      moduleName: 'System management',
      account: 'Account management',
      accountDetail: 'Account detail',
      password: 'Change password',
      dept: 'Department management',
      menu: 'Menu management',
      role: 'Role management',
    },
    table: {
      table: 'Table',
      basic: 'Basic',
      treeTable: 'Tree',
      fetchTable: 'Remote loading',
      fixedColumn: 'Fixed column',
      customerCell: 'Custom column',
      formTable: 'Open search',
      useTable: 'UseTable',
      refTable: 'RefTable',
      multipleHeader: 'MultiLevel header',
      mergeHeader: 'Merge cells',
      expandTable: 'Expandable table',
      fixedHeight: 'Fixed height',
      footerTable: 'Footer',
      editCellTable: 'Editable cell',
      editRowTable: 'Editable row',
      authColumn: 'Auth column',
    },
    employ: { employmgt: 'employManage' },
  },
  x = Object.freeze(
    Object.defineProperty({ __proto__: null, default: T }, Symbol.toStringTag, { value: 'Module' }),
  ),
  F = {
    charts: {
      baiduMap: 'Baidu map',
      aMap: 'A map',
      googleMap: 'Google map',
      charts: 'Chart',
      map: 'Map',
      line: 'Line',
      pie: 'Pie',
    },
    comp: {
      comp: 'Component',
      basic: 'Basic',
      transition: 'Animation',
      countTo: 'Count To',
      scroll: 'Scroll',
      scrollBasic: 'Basic',
      scrollAction: 'Scroll Function',
      virtualScroll: 'Virtual Scroll',
      tree: 'Tree',
      treeBasic: 'Basic',
      editTree: 'Searchable/toolbar',
      actionTree: 'Function operation',
      modal: 'Modal',
      drawer: 'Drawer',
      desc: 'Desc',
      lazy: 'Lazy',
      lazyBasic: 'Basic',
      lazyTransition: 'Animation',
      verify: 'Verify',
      verifyDrag: 'Drag ',
      verifyRotate: 'Picture Restore',
      qrcode: 'QR code',
      strength: 'Password strength',
      upload: 'Upload',
      loading: 'Loading',
      time: 'Relative Time',
      cropperImage: 'Cropper Image',
      cardList: 'Card List',
    },
    editor: {
      editor: 'Editor',
      jsonEditor: 'Json editor',
      markdown: 'Markdown editor',
      tinymce: 'Rich text',
      tinymceBasic: 'Basic',
      tinymceForm: 'embedded form',
    },
    excel: {
      excel: 'Excel',
      customExport: 'Select export format',
      jsonExport: 'JSON data export',
      arrayExport: 'Array data export',
      importExcel: 'Import',
    },
    feat: {
      feat: 'Page Function',
      icon: 'Icon',
      tabs: 'Tabs',
      tabDetail: 'Tab Detail',
      sessionTimeout: 'Session Timeout',
      print: 'Print',
      contextMenu: 'Context Menu',
      download: 'Download',
      clickOutSide: 'ClickOutSide',
      imgPreview: 'Picture Preview',
      copy: 'Clipboard',
      msg: 'Message prompt',
      watermark: 'Watermark',
      ripple: 'Ripple',
      fullScreen: 'Full Screen',
      errorLog: 'Error Log',
      tab: 'Tab with parameters',
      tab1: 'Tab with parameter 1',
      tab2: 'Tab with parameter 2',
      menu: 'Menu with parameters',
      menu1: 'Menu with parameters 1',
      menu2: 'Menu with parameters 2',
      ws: 'Websocket test',
      breadcrumb: 'Breadcrumbs',
      breadcrumbFlat: 'Flat Mode',
      breadcrumbFlatDetail: 'Flat mode details',
      breadcrumbChildren: 'Level mode',
      breadcrumbChildrenDetail: 'Level mode detail',
    },
    flow: { name: 'Graphics editor', flowChart: 'FlowChart' },
    form: {
      form: 'Form',
      basic: 'Basic',
      useForm: 'useForm',
      refForm: 'RefForm',
      advancedForm: 'Shrinkable',
      ruleForm: 'Form validation',
      dynamicForm: 'Dynamic',
      customerForm: 'Custom',
      appendForm: 'Append',
    },
    iframe: {
      frame: 'External',
      antv: 'antVue doc (embedded)',
      doc: 'Project doc (embedded)',
      docExternal: 'Project doc (external)',
    },
    level: { level: 'MultiMenu' },
    page: {
      page: 'Page',
      form: 'Form',
      formBasic: 'Basic Form',
      formStep: 'Step Form',
      formHigh: 'Advanced Form',
      desc: 'Details',
      descBasic: 'Basic Details',
      descHigh: 'Advanced Details',
      result: 'Result',
      resultSuccess: 'Success',
      resultFail: 'Failed',
      account: 'Personal',
      accountCenter: 'Personal Center',
      accountSetting: 'Personal Settings',
      exception: 'Exception',
      netWorkError: 'Network Error',
      notData: 'No data',
      list: 'List page',
      listCard: 'Card list',
      basic: 'Basic list',
      listBasic: 'Basic list',
      listSearch: 'Search list',
    },
    permission: {
      permission: 'Permission',
      front: 'front-end',
      frontPage: 'Page',
      frontBtn: 'Button',
      frontTestA: 'Test page A',
      frontTestB: 'Test page B',
      back: 'background',
      backPage: 'Page',
      backBtn: 'Button',
    },
    setup: { page: 'Intro page' },
    system: {
      moduleName: 'System management',
      account: 'Account management',
      accountDetail: 'Account detail',
      password: 'Change password',
      dept: 'Department management',
      menu: 'Menu management',
      role: 'Role management',
    },
    table: {
      table: 'Table',
      basic: 'Basic',
      treeTable: 'Tree',
      fetchTable: 'Remote loading',
      fixedColumn: 'Fixed column',
      customerCell: 'Custom column',
      formTable: 'Open search',
      useTable: 'UseTable',
      refTable: 'RefTable',
      multipleHeader: 'MultiLevel header',
      mergeHeader: 'Merge cells',
      expandTable: 'Expandable table',
      fixedHeight: 'Fixed height',
      footerTable: 'Footer',
      editCellTable: 'Editable cell',
      editRowTable: 'Editable row',
      authColumn: 'Auth column',
    },
  },
  S = Object.freeze(
    Object.defineProperty({ __proto__: null, default: F }, Symbol.toStringTag, { value: 'Module' }),
  ),
  B = Object.assign({
    './en/common.ts': g,
    './en/routes/dashboard.ts': h,
    './en/routes/demo.ts': x,
    './en/routes/system.ts': S,
  }),
  v = { message: l(i({}, u(B, 'en')), { en: p }) }
export { v as default }
