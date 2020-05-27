"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    projectRoot: "./src",
    projectName: "test",
    outDir: './dist/static',
    routes: {
        '/blog/:slug': {
            type: 'contentFolder',
            slug: {
                folder: "./blog"
            }
        },
    }
};
