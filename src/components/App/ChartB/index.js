import Loadable from 'react-loadable';
import Loading from '../../Loading';

const loader = () => import('./ChartBLoad');

const ChartB = Loadable({
  loader,
  loading: Loading,
});

export default ChartB;
