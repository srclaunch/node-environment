import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatterTool,
  CodeLinterTool,
  StaticTypingTool,
  License,
  PackageAccess,
  Project,
  ProjectType,
  TestReporter,
} from '@srclaunch/types';

export default {
  name: '@srclaunch/node-environment',
  description: 'Node.js environment specific utilities for SrcLaunch services',
  type: ProjectType.Library,
  build: {
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    platform: BuildPlatform.Node,
    target: BuildTarget.ESNext,
    tool: BuildTool.Vite,
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
  },
  environment: {
    development: {
      formatters: [CodeFormatterTool.Prettier],
      linters: [CodeLinterTool.ESLint],
      staticTypes: [StaticTypingTool.TypeScript],
    },
  },
  release: {
    package: {
      publish: {
        access: PackageAccess.Public,
        license: License.MIT,
        registry: 'https://registry.npmjs.org/',
      },
    },
  },
  requirements: {
    node: '>=16',
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
} as Project;
