#!/usr/bin/env node

process.title = 'sve-record';

const svec = require('commander');

svec.version('1.0.0')
	.usage('<command> [options]')
	.command('generate', 'generate file from a template (short-cut alias: "g")')
	.parse(process.argv)

svec
    .command('create <projectName>')
    .action((projectName) => {
        require('./generate.js')(projectName);
    });


 svec.parse(process.argv);
