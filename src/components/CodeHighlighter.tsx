// components/CodeHighlighter.tsx
import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import '../styles/tomorrow-night-blue.css';

interface CodeHighlighterProps {
  language: string;
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({ language }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const code = `
01.  class Ali {
02.   constructor() {
03.      this.name  = 'Ali G@te$';
04.      this.phone = +923246987780;
05.      this.email = 'hacktech877@gmail.com';
06.   }
07.   frontendDeveloper() {
08.        return [
09.        {'✔':'Proficient in HTML5, CSS3, JavaScript, and TypeScript.'}
10.        {'✔':'Experienced with React and Tailwind CSS for developing responsive 
11.        and dynamic web applications.'}
12.        {'✔':'Skilled in using Framer Motion for seamless text transitions and 
13.        animations.'}
14.     ]
15.   }
16.   backendTechnologies() {
17.     return [
18.       {'☆':'Familiar with Node.js for server-side Development.'}
19.       {'☆':'Worked with Express.js to build RESTful APIs.'}
20.    ]
21.   }
22.   portfolioDevelopment() {
23.    return [
24.       {'⁂':'Built a Personal Portfolio using Next.js, Highlight.js, & 
25.       Framer Motion.'}
26.       {'⁂':'Explored Three.js for 3D Graphics and Animations.'}
27.    ]
28.   }
29.   professionalExperience() {
30.     return [
31.       {'☞':'Worked as a Frontend Web Developer, skills in JavaScript/TypeScript, React, 
32.       and Tailwind CSS.'}
33.       {'☞':'Former Business Analyst, creating Business Documents,Flowcharts, and 
34.       Process Maps.'}
35.       {'☞':'Project management tools like Jira and methodologies such as Scrum.'}
36.     ]
37.   }
38. }`
  ;

  return (
    <pre className='paragh'>
      <code className={language}>
        {code}
      </code>
    </pre>
  );
};

export default CodeHighlighter;
