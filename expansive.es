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
                transform.sass = Cmd.locate('node-sass')
                if (!transform.sass) {
                    run('npm install -g node-sass')
                    transform.sass = Cmd.locate('node-sass')
                    trace('Warn', 'Cannot find node-sass')
                }
            },

            render: function(contents, meta, transform) {
                if (transform.sass) {
                    contents = run(transform.sass, contents)
                }
                return contents
            }
        }
    }
})
