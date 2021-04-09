{
  mode: 'production',
  resolve: {
    modules: [
      '/home/soeki/programs/app/reversi/build/js/packages/reversi/kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/home/soeki/programs/app/reversi/build/js/packages/reversi/kotlin-dce/reversi.js'
    ]
  },
  output: {
    path: '/home/soeki/programs/app/reversi/build/distributions',
    filename: [Function: filename],
    library: 'reversi',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  }
}