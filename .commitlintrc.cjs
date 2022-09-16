module.exports = {
  // ↓忽略包含init的提交消息
  ignores: [(commit) => commit.includes('init')],
  // ↓按照传统消息格式来验证
  extends: ['@commitlint/config-conventional'],
  // 自定义解析器
  parserPreset: {
    // 解析器配置
    parserOpts: {
      // commit 提交头的规则限制
      headerPattern: /^(\w*|[\u4e00-\u9fa5]*)(?:[\(\（](.*)[\)\）])?[\:\：] (.*)/,
      // 匹配分组
      headerCorrespondence: ['type', 'scope', 'subject'],
      // 引用
      referenceActions: [
        'close',
        'closes',
        'closed',
        'fix',
        'fixes',
        'fixed',
        'resolve',
        'resolves',
        'resolved',
      ],
      // 对应issue要携带#符号
      issuePrefixes: ['#'],
      // 不兼容变更
      noteKeywords: ['BREAKING CHANGE'],
      fieldPattern: /^-(.*?)-$/,
      revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
      revertCorrespondence: ['header', 'hash'],
      warn() {},
      mergePattern: null,
      mergeCorrespondence: null,
    },
  },
  // ↓自定义提交消息规则
  rules: {
    // ↓body以空白行开头
    'body-leading-blank': [2, 'always'],
    // ↓footer以空白行开头
    'footer-leading-blank': [1, 'always'],
    // ↓header的最大长度
    'header-max-length': [2, 'always', 108],
    // ↓subject为空
    'subject-empty': [2, 'never'],
    // ↓type为空
    'type-empty': [2, 'never'],
    // ↓type的类型
    'type-enum': [
      2,
      'always',
      [
        // 新功能
        'feat',
        // 修复
        'fix',
        // 性能
        'perf',
        // 风格
        'style',
        // 文档
        'docs',
        // 测试
        'test',
        // 重构
        'refactor',
        // 打包
        'build',
        // 集成部署
        'cicd',
        // 事务
        'chore',
        // 还原
        'revert',
        'wip',
        // 流程
        'workflow',
        // 类型
        'types',
        'release',
        'update',
      ],
    ],
  },
}
