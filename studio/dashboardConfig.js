export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60e860dbef57e422d8a3168d',
                  title: 'Sanity Studio',
                  name: 'white-sign-convert-studio',
                  apiId: '35bc3031-c7de-487f-957c-a14de9e30f90'
                },
                {
                  buildHookId: '60e860dba261c91ef7eae5c7',
                  title: 'Blog Website',
                  name: 'white-sign-convert',
                  apiId: 'c1a994bc-f8af-4e0b-a620-058145d638b1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dafitime/white-sign-convert',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://white-sign-convert.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
