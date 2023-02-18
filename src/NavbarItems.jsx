import { RectangleStackIcon } from '@heroicons/react/24/solid';
import { Squares2X2Icon } from '@heroicons/react/24/solid';
import { PuzzlePieceIcon } from '@heroicons/react/24/solid';

const navbarItems = [
  {
    icon: <Squares2X2Icon className="h-5 w-5 text-indigo-600" />,
    text: 'Dados',
  },
  {
    icon: <RectangleStackIcon className="h-5 w-5 text-indigo-600" />,
    text: 'Juegos',
  },
  {
    icon: <PuzzlePieceIcon className="h-5 w-5 text-indigo-600" />,
    text: 'Figuras',
  },
];

export default navbarItems;
