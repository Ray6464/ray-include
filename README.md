# ray-include
A linking tool to dynamically link header files for JavaScript, NodeJS, and all other programming languages.

# Installation
To install use:
```
npm i ray-include -g
```

# Usage
To use this to include code snippets from a file named `abc.js` in a file named `index.js` use:
```javascript
#include <abc.js>
```
To compile the files togather use:
```
ray-include -f index.js
```

You can use `ray-include` on any file, with any file. For example you can use it on a Ruby file, a Rust file, etc. The syntax remains the same.

If you are intrested in this type of syntax for JavaScript then checkout Ray-Script on NPM `npm i ray-script -g`, which is a Transpiled Programming Language that gives `god mode` to Javascript! 

# LICENSE
MIT License

Copyright (c) 2021 Ray Voice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
