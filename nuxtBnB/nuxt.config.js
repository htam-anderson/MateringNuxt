export default {
    components: true,
    head: {
        titleTemplate: "Matering Nuxt: %s",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs: {
            class: [
                'my-style'
            ]
        },
        meta: [{
            charset: "utf-8"
        }]
    },
    router: {
        prefecthLinks: false
    },
    plugins: [
        // we can define the mode to run plugin in server, client or both here by the object
        // {src: '~/plugins/maps.client', mode: 'client'}
        // since we already using naming convention of Nuxt then we just need to use a string path
        '~/plugins/maps.client',
        '~/plugins/dataApi'
    ]
}
