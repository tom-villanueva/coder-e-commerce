import { RectangleStackIcon } from '@heroicons/react/24/solid';
import { Squares2X2Icon } from '@heroicons/react/24/solid';
import { PuzzlePieceIcon } from '@heroicons/react/24/solid';

const navbarItems = [
  {
    icon: <Squares2X2Icon className="h-5 w-5 text-indigo-600" />,
    text: 'Dices',
    path: '/category/dices',
  },
  {
    icon: <RectangleStackIcon className="h-5 w-5 text-indigo-600" />,
    text: 'Accesories',
    path: '/category/accesories',
  },
  {
    icon: <PuzzlePieceIcon className="h-5 w-5 text-indigo-600" />,
    text: 'Figurines',
    path: '/category/figurines',
  },
];

export default navbarItems;
