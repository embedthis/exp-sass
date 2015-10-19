/*
    expansive.es - Configuration for exp-sass

    Transform by prefixing and minifying.
 */
Expansive.load({

    services: {
        name:   'sass',

        transforms: {
            mappings: {
                sass: 'css'
            },

            init: function(transform) {
                transform.sass = Cmd.locate('sass')
                if (!transform.sass) {
                    trace('Warn', 'Cannot find sass')
                }
            },

            render: function(contents, meta, transform) {
                if (transform.sass) {
                    contents = run(transform.sass + ' --stdin --scss', contents)
                }
                return contents
            }
        }
    }
})
