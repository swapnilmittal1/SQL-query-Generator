import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeDisplay = ({ codeString }) => {
    return (
        <div className="code-display">
            <SyntaxHighlighter language="javascript" style={docco}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
}

export default CodeDisplay;
