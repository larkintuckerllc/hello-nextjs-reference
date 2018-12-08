import Loadable from 'react-loadable';
import Loading from '../../Loading';

const loader = () => import('./LoremLoad');

const Lorem = Loadable({
  loader,
  loading: Loading,
});

export default Lorem;
