import { useState } from 'react';
import './App.css';

const folders = {
  children: [
    {
      name: 'node_modules',
      children: [
        {
          name: 'react',
        },
      ],
    },
    {
      name: 'src',
      children: [
        {
          name: 'components',
          children: [
            {
              name: 'App.tsx',
            },
          ],
        },
      ],
    },
    {
      name: 'package.json',
    },
    {
      name: 'README.md',
    },
  ],
};

type TFolder = {
  name: string;
  children?: TFolder[];
};

function Folder({ name, children }: TFolder) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{name}</div>
      {isOpen && children && (
        <div>
          {children.map((folder) => (
            <Folder {...folder} />
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {folders.children.map((folder) => (
        <>
          {/* <div>{folder.name}</div> */}
          <Folder {...folder} />
        </>
      ))}
    </div>
  );
}

export default App;
