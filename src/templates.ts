interface Other {
  readonly name: string;
  readonly value: string;
  readonly branches?: boolean;
}

interface BundlerTemplate {
  readonly rollup: string | null;
  readonly webpack: string | null;
  readonly other?: Other[];
}

export interface TemplateOption {
  readonly name: string;
  readonly template: string | BundlerTemplate;
  readonly port: null | string | BundlerTemplate;
}

const TemplateOptions: TemplateOption[] = [
  {
    name: 'Svelte',
    port: {
      other: [
        {
          name: 'Component',
          value: '5000'
        },
        {
          name: 'TailwindCSS',
          value: 'BRANCHES'
        },
        {
          name: 'Typescript',
          value: '5000'
        }
      ],
      rollup: '5000',
      webpack: '8080'
    },
    template: {
      other: [
        {
          name: 'Component',
          value: 'https://github.com/Axelen123/svelte-component-template#master'
        },
        {
          branches: true,
          name: 'TailwindCSS',
          value: 'https://github.com/Axelen123/svelte-tailwind-template'
        },
        {
          name: 'Typescript',
          value: 'https://github.com/pyoner/svelte-ts-template#master'
        }
      ],
      rollup: 'https://github.com/sveltejs/template#master',
      webpack: 'https://github.com/sveltejs/template-webpack#master'
    }
  },
  {
    name: 'Svelte Native',
    port: null,
    template: 'https://github.com/halfnelson/svelte-native-template#master'
  },
  {
    name: 'Sapper',
    port: '3000',
    template: {
      rollup: 'https://github.com/sveltejs/sapper-template#rollup',
      webpack: 'https://github.com/sveltejs/sapper-template#webpack'
    }
  }
];

export default TemplateOptions;
