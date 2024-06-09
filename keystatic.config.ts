import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'bravies',
      name: 'bravies-web',
    }
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        subtitle: fields.text({ label: 'Subtitle', description: 'Provide more context to the title' }),
        brief: fields.text({ label: 'Brief', multiline: true, description: 'A short introduction to the content. One or two sentences at most' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags', itemLabel: props => props.value, description: 'Allows the user to filter articles by subject' }),
        content: fields.markdoc({
          label: 'Content',
        }),
        author: fields.text({ label: 'Author', defaultValue: 'Dr. Andrea Bliss' }),
        publishedOn: fields.date({
          label: 'Published On',
          description: 'The date the article was published',
          defaultValue: { kind: 'today' }
        }),
      },
    }),
  },
});
