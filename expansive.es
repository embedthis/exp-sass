/*
    expansive.es - Configuration for exp-sass

    Transform by prefixing and minifying.
 */
Expansive.load({
    transforms: {
        name:   'compile-sass-css',
        mappings: {
            sass: 'css'
        },
        script: `
            function transform(contents, meta, service) {
                let sass = Cmd.locate('sass')
                if (sass) {
                    contents = run(sass + ' --stdin --scss', contents)
                } else {
                    trace('Warn', 'Cannot find sass')
                }
                return contents
            }
        `
    }
})
