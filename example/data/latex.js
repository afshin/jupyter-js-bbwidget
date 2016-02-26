// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

// module.exports = '\\begin{equation} \\label{eq2} \\sum_{i = 1}^n i = \\frac{n(n + 1)}{2} \\end{equation}';
module.exports = '\\begin{equation}\\frac{1}{\\displaystyle 1+' +
'   \\frac{1}{\\displaystyle 2+' +
'   \\frac{1}{\\displaystyle 3+x}}} +' +
' \\frac{1}{1+\\frac{1}{2+\\frac{1}{3+x}}}\\end{equation}';
