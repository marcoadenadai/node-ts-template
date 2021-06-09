module.exports = {
    presets: [
        [
            '@babel/preset-env',
            { targets: { node: 'current' } }
        ],
      '@babel/preset-typescript'
    ],
    plugins: [
        [
            'module-resolver',
            { alias: {
                '@api': './src/api',
                '@config': './src/config',
                '@jobs': './src/jobs',
                '@services': './src/services', 
                '@subscribers': './src/subscribers'
            }}
        ]
    ],
    ignore: [
        '**/*.spec.ts' 
    ]
}  