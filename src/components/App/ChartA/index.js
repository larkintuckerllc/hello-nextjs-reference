import Loadable from 'react-loadable';
import Loading from '../../Loading';

const loader = () => import('./ChartALoad');

const ChartA = Loadable({
  loader,
  loading: Loading,
});

export default ChartA;
