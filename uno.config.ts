import { defineConfig, presetAttributify, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno()
  ],
  transformers: [
    transformerVariantGroup()
  ],
  rules: [
    // ['flex', {display: 'flex' }],
    // ['justify-between', {'justify-content': 'space-between' }], // 一个配置为一个数组
  ],
  shortcuts: [
    //匹配类名的，可以为正则表达式
    {
      'flex-between': 'flex justify-between'
    },
    [/^base-border-(.*)$/, match => `border-1 border-style-dashed border-${match[1]}`],
  ]
})
