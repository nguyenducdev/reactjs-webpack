module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            reducer: 'app/reducer/reducer.js',
            store: 'app/example.js',
            List: 'app/components/List.jsx',
            Note: 'app/components/Note.jsx',
            NoteForm: 'app/components/NoteForm.jsx',
            action: 'app/action.js',
        },
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    }
};