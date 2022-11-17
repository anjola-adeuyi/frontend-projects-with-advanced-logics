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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ paddingBottom: '10px' }}>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {folder?.children?.length ? (isExpanded ? '- ' : '+ ') : ''}
        {folder.name}
      </button>
      {isExpanded && folder?.children && (
        <div style={{ paddingLeft: `${depth * 25}px`, opacity: `${100 - depth * 20}%` }}>
          {folder?.children?.map((folder, index) => (
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
