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

type TFolderProps = {
  folder: TFolder;
  depth: number;
};

function Folder({ folder, depth }: TFolderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{folder.name}</div>
      {isOpen && folder?.children && (
        <div style={{ paddingLeft: `${depth * 10}px`, opacity: `${100 - depth * 20}%` }}>
          {folder?.children.map((folder, index) => (
            <Folder
              key={index}
              folder={folder}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {folders.children.map((folder, index) => (
        <Folder
          key={index}
          folder={folder}
          depth={1}
        />
      ))}
    </div>
  );
}

export default App;
