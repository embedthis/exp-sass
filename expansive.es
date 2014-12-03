/*
    expansive.es - Configuration for exp-sass

    Transform by prefixing and minifying.
 */
Expansive.load({
    expansive: {
        transforms: {
            name:   'compile-sass',
            input:  'sass',
            output: 'css',
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
    }
})
