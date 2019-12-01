export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5de409ce9e61a51efe2072b1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zzq5nsvq',
                  apiId: '2fdbb517-5951-438e-af4b-b54dc925176f'
                },
                {
                  buildHookId: '5de409cfc2685a30dc15f264',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-swss2n41',
                  apiId: '8ff8b431-8e9e-4ccc-9f16-2469ab36ec99'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devav/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-swss2n41.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
