import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  // 用于 dumi dev 和 dumi build 时解析子包路径别名
  alias: {
    '@hooks/hooks': require.resolve('./packages/hooks/src'),
    '@virtualizedLists': require.resolve('./packages/virtualizedList/src'),
  },
  // 1. 解析配置：声明所有子包组件目录
  resolve: {
    // 普通文档目录（全局指南）
    docDirs: ['docs'],
    // 子包目录：每个子包一组，type决定路由前缀
    atomDirs: [
      // 子包 hooks → 路由前缀 /hooks
      { type: 'hooks', dir: 'packages/hooks/src' },
      // 子包 virtualizedList → 路由前缀 /virtualized-lists
      { type: 'virtualized-lists', dir: 'packages/virtualizedList/src' },
      // 子包 components → 路由前缀 /components
      { type: 'components', dir: 'packages/components/src' },
    ],
  },
  themeConfig: {
    name: 'hooks',
    // 主题导航（顶部菜单，自动关联路由）
    nav: [
      { title: '首页', link: '/' },
      { title: 'hooks', link: '/hooks/hook-create' },
      { title: '组件库', link: '/components/over-lay' },
      // { title: '虚拟列表', link: '/virtualized-lists/fixed-height-list' },
    ],
  },
  
});
