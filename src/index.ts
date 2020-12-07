import {
  babel as babelRollup,
  RollupBabelInputPluginOptions,
} from "@rollup/plugin-babel"
import { TransformOptions } from "@babel/core";

interface PluginOptions {
  babel?: TransformOptions
}

export default function Plugin(options: PluginOptions) {
  const babel = options?.babel ?? {}
  const { plugins, presets, ...babelOptions } = babel;
  const babelPlugins = [...(plugins || [])];
  const babelPresets = [...(presets || [])];
  return {
    // Will be passed to rollup.rollup()
    rollupInputOptions: {
      plugins: [
        // Process Solid with @rollup/plugin-babel during build
        babelRollup({
          presets: babelPresets,
          plugins: babelPlugins,
          babelHelpers: "bundled",
          ...(babelOptions || options),
        } as RollupBabelInputPluginOptions),
      ],
    },
  }
}


