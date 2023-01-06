/*
feat: 新功能（feature）
fix: 修补bug
docs: 文档（documentation）
style: 格式（不影响代码运行的变动）
refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
chore: 构建过程或辅助工具的变动
revert: 撤销，版本回退
perf: 性能优化
test：测试
improvement: 改进
build: 打包
ci: 持续集成
*/
module.exports = {
  extends: ['@commitlint/config-conventional']
  // rules: {
  //   'type-enum': [
  //     2,
  //     'always',
  //     ['feature', 'update', 'fixbug', 'refactor', 'optimize', 'style', 'docs', 'chore']
  //   ],
  //   'type-case': [0],
  //   'type-empty': [0],
  //   'scope-empty': [0],
  //   'scope-case': [0],
  //   'subject-full-stop': [0, 'never'],
  //   'subject-case': [0, 'never'],
  //   'header-max-length': [0, 'always', 72]
  // }
}
